const express = require("express");
const port = "5000";
const api = express();
const cors = require("cors");

api.use(express.json());
api.use(cors);

api.listen(5000, () => {
  console.log(`API listening at http://localhost:${5000}`);
});

api.get("/", (req, res) => {
  res.send({
    message: "Welcome to the boilerplate API",
  });
});

api.get("*", (req, res) => {
  res.status(404).send({ status: 404, message: "Resource not found" });
});

module.exports = api;
