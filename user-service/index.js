const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 3001;

app.get("/api/users", (req, res) => {
  return res.json({ users: [{ id: 1, name: "Leonardo" }] });
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
