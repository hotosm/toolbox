cd $HOME/pdf-build
mkdir -p $HOME/public/pdfs
mkdir -p $HOME/tmp
for d in $(find . -mindepth 1 -type d); do
    mkdir $HOME/public/pdfs/"$d"
    mkdir $HOME/tmp/"$d"
done &&

for i in $(find . -mindepth 1); do
    if [ -f "$i" ] && [ "${i: -3}" == ".md" ]; then
        pdfreplace=${i//\.md/.pdf}
        pdffilename=${pdfreplace/\.\//}
    fi
done

for i in $(find . -mindepth 1); do
    if [ -f "$i" ] && [ "${i: -3}" == ".md" ]; then
        pdfreplace=${i//\.md/.pdf}
        pdffilename=${pdfreplace/\.\//}
        pdffilename=${pdfreplace/pages\//}
        filepath=${i//\.\//$HOME/pdf-build/}
        if [[ "${filepath: -12}" == ".fullsite.md" ]]; then
            pandoc "$filepath" -o "$HOME/tmp/$pdffilename" --pdf-engine=xelatex -V geometry:margin=1in -V papersize:a4 -V mainfont:Archivo-Regular --toc --toc-depth=1
            gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dPrinted=false -dNOPAUSE -dQUIET -dBATCH -sOutputFile="$HOME/public/pdfs/${pdffilename//\.fullsite/}" "$HOME/tmp/$pdffilename"
        else
           pandoc "$filepath" -o "$HOME/tmp/$pdffilename" --pdf-engine=xelatex -V geometry:margin=1in -V papersize:a4 -V mainfont:Archivo-Regular
           gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dPrinted=false -dNOPAUSE -dQUIET -dBATCH -sOutputFile="$HOME/public/pdfs/$pdffilename" "$HOME/tmp/$pdffilename"
       fi 
   fi
done