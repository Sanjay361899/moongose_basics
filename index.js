const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
 
const client = new MongoClient(url);

async function getData() {
  let connectmongodb = await client.connect();
  let selectdb =connectmongodb.db("e-comm");
  let selectCollection = selectdb.collection("products");
  const response = await selectCollection.find({}).toArray();
  console.log(response);
}
getData();
