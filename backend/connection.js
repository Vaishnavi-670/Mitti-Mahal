const mongoose = require('mongoose');

require('dotenv').config();

const url = process.env.DB_URL;
//connect to database 
mongoose.connect(url) 
.then((result) => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;