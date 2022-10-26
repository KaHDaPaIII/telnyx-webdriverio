FROM node:latest
WORKDIR /app
ADD . /app

RUN apt-get update && \
    apt-get install -y wget && \
    wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt-get install -y ./google-chrome-stable_current_amd64.deb
RUN npm install

CMD npx wdio run ./configs/wdio-docker.conf.js