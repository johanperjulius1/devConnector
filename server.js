const express = require('express');

const server = express();
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
