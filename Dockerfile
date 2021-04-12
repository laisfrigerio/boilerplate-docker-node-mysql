FROM node:14

WORKDIR /usr/src/app

COPY package*.json /
COPY .env /.env
COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "start"]