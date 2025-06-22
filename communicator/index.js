const axios = require("axios");

class Communicator {
  constructor() {
    this.userServiceClient = axios.create({
      baseURL: "http://user-service:3001/api",
    });
    this.productServiceClient = axios.create({
      baseURL: "http://product-service:3002/api",
    });
    this.orderServiceClient = axios.create({
      baseURL: "http://order-service:3003/api",
    });
  }

  async getUsers() {
    const response = await this.userServiceClient.get("/users");

    return response.data;
  }

  async getProducts() {
    const response = await this.productServiceClient.get("/products");

    return response.data;
  }

  async getOrders() {
    const response = await this.orderServiceClient.get("/orders");

    return response.data;
  }
}

module.exports = new Communicator();
