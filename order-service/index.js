const express = require("express");
const communicator = require("communicator");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 3003;

app.get("/api/orders", (req, res) => {
  return res.json({ orders: [{ id: 1, user_id: 1, product_id: 1 }] });
});

app.get("/api/orders/detail", async (req, res) => {
  try {
    const orders = await communicator.getOrders();
    const users = await communicator.getUsers();
    const products = await communicator.getProducts();

    const detailedOrders = orders.orders.map((order) => {
      const user = users.users.find((user) => user.id === order.user_id);
      const product = products.products.find(
        (product) => product.id === order.product_id
      );

      return { ...order, user, product };
    });

    return res.json({ orders: detailedOrders });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});
