const dbConnect = require("./mongodb");

const deleteData = async () => {
  let mongo_connect = await dbConnect();
  let result_delete = await mongo_connect.deleteOne({ name: "nordss" });
};
deleteData();
