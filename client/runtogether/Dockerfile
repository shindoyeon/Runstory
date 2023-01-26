FROM node:16-alpine3.11
WORKDIR /runtogether/src/app
COPY package*.json ./
COPY package*.json ../

RUN npm install
RUN npm i @fortawesome/free-solid-svg-icons
RUN npm i @fortawesome/free-regular-svg-icons
RUN npm i react-infinite-scroll-component
RUN npm i @fortawesome/free-brands-svg-icons
RUN npm i @fortawesome/react-fontawesome
COPY ./ ./
CMD [ "npm", "run","start" ]