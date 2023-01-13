const express = require("express");
const path = require("path");

const app = express();

const reqFilter= (req, res, next)=>{
    if(!req.query.age){
        res.send("provide age ...")
    }else{
        next();
    }
}
app.use(reqFilter);
app.get('/',(req,res)=>{
    res.send('Home Page')
})
app.listen(5000);