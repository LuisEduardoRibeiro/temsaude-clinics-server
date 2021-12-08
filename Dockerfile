FROM node:alpine AS builder

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3333

CMD [ "npm", "start" ]