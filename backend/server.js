const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  return res.send("Backend Running");
});
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
