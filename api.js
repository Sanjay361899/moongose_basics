const express = require('express')
const dbConnect= require('./mongodb')
const app=express();
app.get('',async(req,resp)=>{
    let mongo_connect=await dbConnect();
    let mongo_getData= await mongo_connect.find({}).toArray()
    resp.send(mongo_getData);
})
app.listen(5000)