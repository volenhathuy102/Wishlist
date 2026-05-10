require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
mongoose.connect(process.env.MONGODB_URI).then(() => console.log(" Kết nối DB thành công"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', require('./routes/auth'));
app.use('/wishlist', require('./routes/wishlist'));

app.get('/', (req, res) => res.redirect('/wishlist'));
module.exports = app;