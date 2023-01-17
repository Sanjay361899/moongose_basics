const express = require("express");
const dbConnect = require("./mongodb");
// const { name } = require("ejs");
const app = express();
app.use(express.json());
app.get("", async (req, resp) => {
  let mongo_connect = await dbConnect();
  let mongo_getData = await mongo_connect.find({}).toArray();
  console.log(mongo_getData);
  resp.send(mongo_getData);
});
app.post("", async (req, resp) => {
  let mongo_connect = await dbConnect();
  let mongo_insert = await mongo_connect.insertOne(req.body);
  resp.send(req.body.name);
});
app.put("/:name", async (req, resp) => {
  let mongo_connect = await dbConnect();
  let mongo_update = await mongo_connect.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  resp.send(req.body);
});
app.delete("/:name", async (req, resp) => {
  let mongo_connect = await dbConnect();
  let mongo_delete = await mongo_connect.deleteOne({ name: req.params.name });
  resp.send("deleted")
});
app.listen(5000);