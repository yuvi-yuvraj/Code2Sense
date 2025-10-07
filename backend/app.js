const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');
const cors = require('cors');
const app = new express();
const PORT = process.env.PORT ;
const path = require('path');

require('./db/conn');
const _dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./router/auth'));
app.use('/api/ai', require('./router/aiRoutes'));

const consoleURL = (req, res, next)=>{
    console.log(`User at URL : localhost:${PORT}${req.url}`);
    next();
}

app.use(express.static(path.join(_dirname, '/frontend/dist')));

// ✅ Wildcard route (NO regex — this is safe)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(_dirname, 'frontend', 'dist', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});