# FROM ianwalter/puppeteer:latest
# WORKDIR /app
# ADD . /app

# RUN npm install

# CMD npx wdio

FROM ubuntu:latest
WORKDIR /app
ADD . /app

RUN apt-get update && \
    apt-get install -y curl &&\
    curl -fsSL https://deb.nodesource.com/setup_19.x | bash - &&\
    apt-get install -y nodejs
RUN apt-get install -y wget && \
    wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt-get install -y ./google-chrome-stable_current_amd64.deb
RUN npm install

CMD npm run wdio