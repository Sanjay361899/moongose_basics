const {MongoClient}= require('mongodb');
const url="mongodb://localhost:27017";
const client= new MongoClient(url);

const dbConnect=async ()=>{
    const connect_mongo= await client.connect();
    const selectdb= connect_mongo.db("e-comm");
    return selectdb.collection("products");
}
module.exports=dbConnect