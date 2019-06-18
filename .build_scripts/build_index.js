const fs = require("fs");
const path = require("path");

const lunr = require("lunr");
const matter = require("gray-matter");
const toml = require("toml");

const langs = ["da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "jp", "nl", "no", "pt", "ro", "ru", "sv", "th", "tr"];
const config = fs.readFileSync("./config.toml", "utf8");
const data = toml.parse(config)
const defaultLang = data.DefaultContentLanguage;
let siteLangs = [];
for ( const language in data.languages) {
  siteLangs.push(language.toString());
}
if (siteLangs.indexOf(defaultLang) == -1) {
  siteLangs.push(defaultLang);
}

if (siteLangs.length > 1) {
  /* multiple languages */
  for (lang of siteLangs) {
    let dir = path.join(__dirname, "../content");
    if (langs.indexOf(lang) != -1) {
      dir = path.join(dir, lang)
      if (lang == defaultLang) {
        lang = '.';
      }
      else {
        lang = `.${lang}`;
      }
      walk(dir).then((foldersContents)=>{
        const documents = foldersContents.filter(filterMd).filter(filterEmpty).map(readFile);
        const idx = lunr(function() {
            this.ref('id');
            this.field('content');
            documents.forEach(function (doc) {
              this.add(doc)
            }, this)
          });
        const lunrDocs = documents.map((obj) => {
          return {id: obj.id, path: obj.path, title: obj.title}
        })
        fs.writeFile(`./static/lunr-documents${lang}.json`, JSON.stringify(lunrDocs), () => {
            console.log(`lunr-documents${lang}.json written`);
        });
    
        fs.writeFile(`./static/lunr-index${lang}.json`, JSON.stringify(idx), () => {
            console.log(`lunr-index${lang}.json written`);
        });
      });
    }
  }
} else {
  /* single language */
  if (langs.indexOf(siteLangs[0]) != -1) {
      let dir = path.join(__dirname, "../content");    walk(dir).then((foldersContents)=>{
      const documents = foldersContents.filter(filterMd).filter(filterEmpty).map(readFile);
      const idx = lunr(function() {
          this.ref('id');
          this.field('content');
          documents.forEach(function (doc) {
            this.add(doc)
          }, this)
        });
      const lunrDocs = documents.map((obj) => {
        return {id: obj.id, path: obj.path, title: obj.title}
      })
      fs.writeFile(`./static/lunr-documents.json`, JSON.stringify(lunrDocs), () => {
          console.log("lunr documents written");
      });

      fs.writeFile(`./static/lunr-index.json`, JSON.stringify(idx), () => {
          console.log("lunr index written");
      });
    });
  }
}

function walk(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (error, files) => {
      if (error) {
        return reject(error);
      }
      Promise.all(files.map((file) => {
        return new Promise((resolve, reject) => {
          const filepath = path.join(dir, file);
          fs.stat(filepath, (error, stats) => {
            if (error) {
              return reject(error);
            }
            if (stats.isDirectory()) {
              walk(filepath).then(resolve);
            } else if (stats.isFile()) {
              resolve(filepath);
            }
          });
        });
      }))
      .then((foldersContents) => {
        resolve(foldersContents.reduce((all, folderContents) => all.concat(folderContents), []));
      });
    });
  });
}

function filterMd(filepath) {
    const ext = path.extname(filepath)
    if (ext == ".md") {
        return filepath
    }
}

function filterEmpty(filepath) {
    const str = fs.readFileSync(filepath, "utf8")
    const content = matter(str).content;
    if (content) {
        return filepath
    }
}

function readFile(filepath, index) {
    const str = fs.readFileSync(filepath, "utf8")
    const title = matter(str).data.title || filepath.split("/").pop() || "introduction"; 
    let path = filepath.split("content").pop()
    path = path.replace(".md", "/")
    path = path.toLowerCase()
    if (path.split("/").pop() == "_index.html") {
      path = path.slice(0,-9);
    }
    return {id: index, path: path, title: title, content: matter(str).content}
}