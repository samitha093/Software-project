FROM node:14.17.6
WORKDIR /app
COPY ./package.json ./
RUN npm install
RUN npm install --save express
COPY . .
EXPOSE 8000
CMD ["npm","start"]