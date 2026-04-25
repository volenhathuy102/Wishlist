const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: String,
    imageUrl: String,
    isBought: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Wishlist', WishlistSchema);