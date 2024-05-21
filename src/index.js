const express = require("express");
const connect = require("./config/database");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server_config");
const apiRoutes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`server is running on port : ${PORT}`);
  await connect();
  console.log("database Connected");
});
