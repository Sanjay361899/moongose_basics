const fs = require("fs").writeFileSync;
const http = require("http");
const colors= require('colors');
const app = require("./app");
http.createServer((req, resp) => {
    resp.write( "<h1>Hello</h1>");
    resp.end();
  })
  .listen(4500);
console.warn(app.z(), "hiiii");
console.log(__dirname.bgBlue);
console.log(__filename);
