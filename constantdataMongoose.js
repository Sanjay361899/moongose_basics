const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});
const saveInDb = async () => {
  const Product = mongoose.model("products", productSchema);
  const data = new Product({
    name: "Real-me u1",
    brand: "Real-mes",
    price: 300,
    category: "android mobile",
  });
  data.save();
};
const updateInDb = async () => {
  const Product = mongoose.model("products", productSchema);
  const data = await Product.updateOne(
    { name: "nordEEEs" },
    { $set: { price: 700 } }
  );
  console.log(data);
};
const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  const data = await Product.deleteOne({ name: "ROG ss" });
};

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  const data = await Product.find({ name: "nordEEEs" });
  console.log(data);
};
findInDB();