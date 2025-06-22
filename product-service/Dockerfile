FROM node:22

WORKDIR /usr/src/app

COPY product-service/package*.json ./
RUN npm install

COPY product-service/. .

EXPOSE 3002
CMD ["npm", "run", "dev"]