FROM node:16-alpine

ARG HOST_IP
ENV HOST_IP $HOST_IP

WORKDIR /app
COPY ./package.json ./

RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn","dev"]
