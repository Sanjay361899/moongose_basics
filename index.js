const express = require('express');
const path=require('path');
const app= express();

 const publicPath= path.join(__dirname,'public');
 console.log(publicPath);
 console.log(__dirname);   
// app.use(express.static(publicPath));
app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/pagenot.html`)
})
 app.listen(5000);