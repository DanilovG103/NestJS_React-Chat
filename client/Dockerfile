FROM node:10-alpine

WORKDIR /usr/client/

COPY package*.json ./

RUN npm install --only=prod

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
