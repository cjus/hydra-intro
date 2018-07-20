const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

let server = app.listen(8080, () => {
  console.log(`ExpressJS listening on http://127.0.0.1:8080`);
});
