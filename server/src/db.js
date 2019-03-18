const mongoose = require("mongoose");

const username = process.env.MONGO_USERNAME || "dev-server-matt";
const password = process.env.MONGO_PASSWORD || "dev-server-matt-0";
const host = process.env.MONGO_HOST || "ds225028.mlab.com";
const port = process.env.MONGO_PORT || 25028;
const dbName = process.env.MONGO_DBNAME || "e-tarjeta-dev";


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
