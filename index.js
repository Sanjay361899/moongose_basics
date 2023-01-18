const express = require("express");
const Product = require("./product");
const multer = require("multer");
require("./config");
const app = express();
app.use(express.json());
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname);
    },
  }),
}).single("user_file");

app.post("/uploadFile", upload, (req, resp) => {
  resp.send("Uploaded");
});
app.get("/:key", async (req, resp) => {
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});
app.get("", async (req, resp) => {
  const data = await Product.find();
  // const result = data.save();
  resp.send(data);
});
app.post("", async (req, resp) => {
  const data = new Product(req.body);
  await data.save();
  resp.send(req.body);
});
app.put("/:name", async (req, resp) => {
  let data = await Product.updateOne(
    { name: req.params.name },
    {
      $set: req.body,
    }
  );
  resp.send("updated");
});
app.delete("/:name", async (req, resp) => {
  const data = await Product.deleteOne({ name: req.params.name });
  resp.send("deleted");
});
app.listen(5000);
