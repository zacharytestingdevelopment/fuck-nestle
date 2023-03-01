
var express = require('express');
var http = require('http');

var app = express();
app.use(express.static("public/"));
var server = http.createServer(app);

server.listen(process.env.PORT || 1000, () => {
    console.log(`Server is listening on http://localhost/1000`);
  })