const express = require("express");
const app = express();
const connect = require("./config/database");

const { PORT } = require("./config/server_config");

app.listen(PORT, async () => {
  console.log(`server is running on port : ${PORT}`);
  await connect();
  console.log("database Connected");
});
