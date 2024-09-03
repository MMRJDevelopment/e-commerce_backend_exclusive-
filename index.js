
const express = require("express");
const app = express();
const dbConnection = require("./config/dbConnection");
const router = require("./routes");

const port = 9000;
dbConnection();

app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
