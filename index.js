const express = require('express');
const path = require('path');

const route = require('./routes');

const app = express();
const port = 8080;

//Định tuyến các file tĩnh
app.use(express.static(__dirname));
//Định tuyến các đường dẫn còn lại
app.use('/', route);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})