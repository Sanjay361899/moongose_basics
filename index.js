const fs = require("fs");
const path=require("path");
const dirname=path.join(__dirname,'files');
const filepath=`${dirname}`

//for writing text file into folder named as files:

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirname}/hello${i}.txt`,"a simple file text file")
// }

// read directory files

// fs.readdir(filepath,(err,item)=>{
//     item.forEach((items)=>console.log(items))})

//read file

// fs.readFile(`${filepath}/hello1.txt`,'utf8',(err,item)=>{console.log(item);})

//UPDATE FILE

// fs.appendFile(`${filepath}/hello0.txt`,'and this is the text we should add in the text file hello0.txt',(err)=>{ if(!err) console.log("file is updated")})


//rename file
// fs.rename(`${filepath}/hello0.txt`,`${filepath}/hello_rename`,(err)=>{
//     if(!err) console.log("file is renamed")
// })

//delete file 

// fs.unlinkSync(`${dirname}/hello_rename`)