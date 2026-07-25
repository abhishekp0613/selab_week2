const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Backend server running');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
