import http from "http";

const PORT = 4545;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World from Node.js !!");
});

server.listen(PORT, () => {
  console.log("Server is running on port 4545 !!");
});
