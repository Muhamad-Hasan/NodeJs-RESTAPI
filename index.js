const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const APP = require('./app');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(APP);
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leadersRouter = require('./routes/leaderRouter');

const hostname = 'localhost';
const port = process.env.port || 8080;
app.use('/dishes',dishRouter)
app.use('/promo',promoRouter)
app.use('/leaders',leadersRouter)

//const server = http.createServer(app);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});