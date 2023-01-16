const dbConnect = require("./mongodb");

const getData = async () => {
  const result = await dbConnect();
  const response = await result.find({}).toArray();
  console.log(response);
};

getData();
