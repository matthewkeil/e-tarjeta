const mongoose = require("mongoose");

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const dbName = process.env.MONGO_DBNAME;


const uri = `mongodb://${username}:${password}@${host}:${port}/${dbName}`;

mongoose.connection.on("error", err =>
  console.error("connection error: " + err)
);

mongoose.connection.on("open", () =>
  console.error(`connected to mongodb://${host}:${port}/${dbName}`)
);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports = mongoose.connection;
