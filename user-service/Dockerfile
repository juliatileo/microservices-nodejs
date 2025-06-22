FROM node:22

WORKDIR /usr/src/app

COPY user-service/package*.json ./
RUN npm install

COPY user-service/. .

EXPOSE 3001
CMD ["npm", "run", "dev"]