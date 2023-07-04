const http = require("http");
const express = require("express");

const app = express();
const port = 8000;


app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", function (req, res) {
  // res.send(
  //   "Hello World about " + "hey " + req.query.name + "you are " + req.query.age
  // );
  res.send(
`   hey ${req.query.name}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// const server = http.createServer(app);

// server.listen(8000, () => {
//   console.log("Server Starts");
// });
