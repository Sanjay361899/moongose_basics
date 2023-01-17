const dbConnect = require("./mongodb");

const getData = async () => {
  const mongo_connect = await dbConnect();
  const response = await mongo_connect.find({}).toArray();
  console.log(response);
};

getData();
