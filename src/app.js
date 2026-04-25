const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wishlist_db')
    .then(() => console.log(" Kết nối MongoDB thành công!"))
    .catch(err => console.error(" Lỗi kết nối:", err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.get('/', (req, res) => res.redirect('/wishlist'));
app.use('/wishlist', require('./routes/wishlist'));

module.exports = app;