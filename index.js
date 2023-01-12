const fs = require("fs");
const path=require("path");
const dirname=path.join(__dirname,'files');
for(i=0;i<5;i++){
    fs.writeFileSync(`${dirname}/hello${i}.txt`,"a simple file text file")
}
