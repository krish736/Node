const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home");
  }
  // console.log(req);
  if (req.url === "/about") {
    res.end("about");
  }
  res.end(`<h1>page not found</h1>`);
});

server.listen(5000);
