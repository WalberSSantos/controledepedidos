const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json(), routes);


app.listen(3333);