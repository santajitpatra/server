const http = require('http');
const fs = require('fs');
const url = require("url");



const server = http.createServer((req, res) => {
    if (req.url ==="/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New request received\n`;
    const myUrl = url.parse(req.url, true)
console.log(myUrl)

    // console.log(req)
    fs,fs.appendFile("log.txt", log, (err, log) => {
// res.end("Hello, Server is listening on");
switch (myUrl.pathname) {
  case "/":
    res.end("HomePage");
    break;
  case "/about":
    const username = myUrl.query.user;
    res.end(`HI ${username}`);
    break;
  case "/search":
    const search = myUrl.query.search_query;
    res.end("here is "+ search);
    break;
  default:
    res.end("404");

    break;
}
    })
})


server.listen(8000, () => {
    console.log("Server Starts")
});