FROM node:16-alpine
WORKDIR /app

COPY ./package.json ./
COPY ./node_modules ./
RUN yarn

COPY . .
EXPOSE 7000
CMD ["yarn","dev"]