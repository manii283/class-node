const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db("myProject");               // Database Name
  const collection = db.collection("documents");

  //   Insert a Document
  //   const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  //   console.log('Inserted documents');

  // Find All Documents
  // const findResult = await collection.find({}).toArray();
  // console.log('Found documents =>', findResult);

  // Find Documents with a Query Filter
  // const filteredDocs = await collection.find({ a: 3 }).toArray();
  // console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  // Update a document
  // const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
  // console.log('Updated documents =>', updateResult);

  // Remove a document
  // const deleteResult = await collection.deleteMany({ a: 3 });
  // console.log('Deleted documents =>', deleteResult);

  // Index a Collection
  const indexName = await collection.createIndex({ a: 1 });
  console.log("index name =", indexName);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
