FROM node AS search 
COPY . /data
WORKDIR /data
RUN npm install 
RUN node .build_scripts/build_index.js

FROM jojomi/hugo AS hugo
COPY --from=search /data /data
WORKDIR /data
RUN hugo

FROM python:3.7 AS clean
COPY --from=hugo /data /data
WORKDIR /data
RUN mkdir pdf-build
RUN pip3 install -r requirements.txt
RUN python3 .build_scripts/clean.py

FROM dalibo/pandocker AS pandoc
COPY --from=clean /data /data
WORKDIR /data
ENV HOME=/data
RUN apt-get update
RUN apt-get install ghostscript --yes
RUN wget https://fonts.google.com/download?family=Archivo -O $HOME/archivo.zip 
RUN unzip $HOME/archivo.zip -d $HOME/.fonts
RUN bash $HOME/.build_scripts/pandoc.sh

FROM python:3.7
COPY --from=pandoc /data /data
WORKDIR /data/public
EXPOSE 7000
CMD python3 -m http.server 7000 
