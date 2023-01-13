const express=require('express')
const app =  express();
app.get('',(req, res)=>{
    res.send("home page "+req.query.name)
    console.log(req.query.name)
})
app.get('/about',(req, res)=>{
    res.send("homess page")
})
app.listen(5000);