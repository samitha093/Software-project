FROM node:16-alpine
WORKDIR /app

ARG NEXT_HOST
ENV NEXT_HOST $NEXT_HOST

COPY ./package.json ./
COPY ./node_modules ./
RUN yarn

COPY . .
EXPOSE 5000
CMD ["yarn","dev"]