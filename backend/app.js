const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');
const cors = require('cors');
const app = new express();
const PORT = process.env.PORT ;

require('./db/conn');

app.use(cors());
app.use(express.json());
app.use(require('./router/auth'));

const consoleURL = (req, res, next)=>{
    console.log(`User at URL : localhost:${PORT}${req.url}`);
    next();
}

app.get('/', consoleURL,(req, res) => {
    res.send('hello world');
})

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});