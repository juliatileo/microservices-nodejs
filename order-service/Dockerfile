FROM node:22

WORKDIR /usr/src/app

COPY order-service/package*.json ./order-service/
COPY communicator/package*.json ./communicator/

COPY communicator ./communicator

COPY order-service ./order-service

WORKDIR /usr/src/app/order-service

RUN npm install

EXPOSE 3003
CMD ["npm", "run", "dev"]