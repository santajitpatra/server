const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New request received\n`;
    // console.log(req)
    fs,fs.appendFile("log.txt", log, (err, log) => {
// res.end("Hello, Server is listening on");
switch (req.url) {
  case "/":
    res.end("HomePage");
    break;
  case "/about":
    res.end("AboutPage");
    break;
  default:    res.end("404");

    break;
}
    })
})


server.listen(8000, () => {
    console.log("Server Starts")
});