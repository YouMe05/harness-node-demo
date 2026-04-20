const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from Harness Free Plan CI Demo"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "harness-freeplan-node-demo"
  });
});

module.exports = app;