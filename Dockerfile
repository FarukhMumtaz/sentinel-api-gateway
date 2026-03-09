FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN ls -R src/

EXPOSE 3000

CMD ["node", "app.js"]