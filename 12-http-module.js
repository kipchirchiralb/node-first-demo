const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello, Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can not find the page youre looking for</p>
    <a href='/'>back home</a>
  `);
});

server.listen(5100);
