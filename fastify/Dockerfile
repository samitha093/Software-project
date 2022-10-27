FROM node:16-alpine
RUN npm install -g yarn
WORKDIR /app

ARG NEXT_HOST
ENV NEXT_HOST $NEXT_HOST

COPY ./package.json ./
RUN yarn

COPY . .
EXPOSE 5000
CMD ["yarn","dev"]
