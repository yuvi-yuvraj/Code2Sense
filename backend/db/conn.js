const mongoose = require('mongoose');
const DB = process.env.DB;

mongoose.connect(DB)
.then(() => {
    console.log(`database connect successfuly`);
})
.catch((err) => {
    console.log(`an error is occured. the error is :${err}`);
})