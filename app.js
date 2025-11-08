const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello lab1'); 
});

module.exports = app;
