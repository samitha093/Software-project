FROM node:14.17.6
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "build"]
EXPOSE 3000
CMD ["npm","start"]