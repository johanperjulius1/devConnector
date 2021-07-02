const express = require('express');
const connectDB = require('./config/db');

const server = express();
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

connectDB();

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
