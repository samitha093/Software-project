FROM node:16

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y yarn
RUN yarn install

WORKDIR /app

ARG MONGO_URI
ARG NEXT_HOST
ARG API_HOST
ARG SECRET
ARG GMAIL
ARG KEY

ENV MONGO_URI $MONGO_URI
ENV NEXT_HOST $NEXT_HOST
ENV API_HOST $API_HOST
ENV SECRET $SECRET
ENV GMAIL $GMAIL
ENV KEY $KEY

COPY ./package.json ./
RUN yarn

COPY . .
EXPOSE 8000
CMD ["yarn","dev"]
