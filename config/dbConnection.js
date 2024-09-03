const { connect } = require("mongoose");
async function dbConnection () {
try {
  await connect(
    "mongodb+srv://mahi1971kvs:mehebuba@cluster0.ce9ajff.mongodb.net/exclusive?retryWrites=true&w=majority&appName=Cluster0"
  );
   console.log("Database connection successfully");
} catch (error) {
  console.log("fail to connect db");
  console.error(err);
  handleError(error);
}
}

module.exports = dbConnection;