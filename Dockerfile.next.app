# FROM httpsdom/tickbid:reactapp
FROM node:13.3.0 AS compile-image
RUN npm install -g yarn