const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.get('',(req,resp)=>{
    resp.render('profile',{name:"Bhasin"});
})
app.listen(5000);