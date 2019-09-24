import os
import toml
import pathlib
import shutil
import frontmatter
import re

from typing import List, Dict

def copy_parents(src, dest_folder, dir_offset=0):
    prev_offset = 0 if dir_offset == 0 else src.replace('/', '%', dir_offset - 1).find('/') + 1
    post_offset = src.rfind('/')
    src_dirs = '' if post_offset == -1 else src[prev_offset:post_offset]
    src_filename = src[post_offset + 1:]
    os.makedirs(f'{dest_folder}/{src_dirs}', exist_ok=True)
    shutil.copy(src, f'{dest_folder}/{src_dirs}/{src_filename}')

def move_images(dir = ""):
    for path, _, files in os.walk(f'static/{dir + "/"}'):
        for filename in files:
            ext = os.path.splitext(filename)[1]
            if ext.lower() in ['.jpg','.jpeg','.png','.gif']:
                copy_parents(os.path.join(path, filename), 'pdf-build', 1)

def clean_markdown(filename):
    post = frontmatter.load(filename)
    if post.content:
        title = post.metadata.get('title', '')
        guide = {}
        guide['filename'] = filename
        content = post.content
        replace_regex = r'(!\[[^\]]*\]\()(\/)(.*?)\s*("(?:.*[^"])")?\s*(\))'
        content = re.sub(replace_regex, r'\1\3\5', content)
        guide['content'] = ''
        if title:
            guide['content'] += '# {0} \n\n'.format(title)
        guide['content'] += content
        return guide['content']
    return ''

def traverse_pages(page_path) -> List:
    pdf_pages = []
    for path, _, files in os.walk(page_path):
        p = pathlib.Path(path)
        for filename in files:
            ext = os.path.splitext(filename)[1]
            if ext == '.md':
                out_path = p.parts[1]
                pdf_markdown = pathlib.Path('pdf-build',out_path, filename)
                if not os.path.exists(os.path.dirname(pdf_markdown)):
                    try:
                        os.makedirs(os.path.dirname(pdf_markdown))
                    except OSError as exc: 
                        if exc.errno != errno.EEXIST:
                            raise
                content = clean_markdown(pathlib.Path(path, filename))
                if content:
                    pdf_pages.append({"content":content, "name": filename})
                    with open(pdf_markdown, 'w') as f:
                        f.write(content)
    return pdf_pages

def build_full_site(pages: List[Dict], site_name: str, lang: str = ''):
    full_pdf_content = "\n\n\pagebreak\n\n"
    lang_path = ''
    if lang:
        lang_path = f'{lang}/'
    content = clean_markdown(f"content/{lang_path}_index.md")
    if content:
        full_pdf_content += content
        full_pdf_content += "\n\n\pagebreak\n\n"
    for item in sorted(pages, key=lambda k: k['name']):
        full_pdf_content += item['content']
        full_pdf_content += "\n\n\pagebreak\n\n"
    with open(f'pdf-build/{lang_path}{site_name}.fullsite.md', 'w') as f:
        f.write(full_pdf_content)

def main():
    langs = []
    extensions = {}
    with open('config.toml', 'r') as f:
        config = toml.loads(f.read())
        default_lang = config['DefaultContentLanguage']
        site_name = config['title'].replace(' ', '_')
        site_name = site_name.replace("'", "")
        site_name = site_name.replace('"', '')
        site_name = site_name.replace(',', '')
        site_name = site_name.replace('.', '')
        if 'languages' in config:
            for key in config['languages']:
                langs.append(key)
                extensions[config['languages'][key]['contentDir'].split('/')[-1]] = key
                os.mkdir(os.path.join('pdf-build', key))
    if langs:
        for lang in langs:
            move_images(lang)
            pdf_pages = traverse_pages(f'content/{lang}/pages')
            build_full_site(pdf_pages, site_name, lang)
    else:
        move_images()
        pdf_pages = traverse_pages(f'content/pages')
        build_full_site(pdf_pages, site_name)

if __name__ == "__main__":
    main()