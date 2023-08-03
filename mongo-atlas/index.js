const express = require("express");
const bodyParser = require("body-parser");
// const { createProduct } = require("./mongodb");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.use(bodyParser.json());

app.post("/products");

app.get("/products");

app.listen(3000);

const uri ="mongodb+srv://nayakmanisha515:Xjp9ERBqPRhJU89L@cluster0.p6eyy8a.mongodb.net/";

// const client = new MongoClient(uri, { userNewUrlParser: true });
const client = new MongoClient(uri);

client.connect((err) => {
  const collection = client.db("test").collection("devices");

  console.log("I am connected");
  client.close();
});

