const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 3002;

app.get("/api/products", (req, res) => {
  return res.json({ products: [{ id: 1, name: "Ketchup" }] });
});

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
