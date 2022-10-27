FROM node:16

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y yarn
RUN yarn install

WORKDIR /app

ARG NEXT_HOST
ENV NEXT_HOST $NEXT_HOST

COPY ./package.json ./
RUN yarn

COPY . .
EXPOSE 7000
CMD ["yarn","dev"]
