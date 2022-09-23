FROM node:14.17-alpine
WORKDIR /app
COPY ./package.json ./
COPY ./node_modules ./
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn","dev"]
