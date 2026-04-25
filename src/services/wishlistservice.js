const Wishlist = require('../models/Wishlist');

const getActiveItems = async (userId) => {
    return await Wishlist.find({ userId, isBought: false }).sort({ createdAt: -1 });
};

const createItem = async (data) => {
    return await Wishlist.create(data);
};

const markAsBought = async (itemId) => {
    return await Wishlist.findByIdAndUpdate(itemId, { isBought: true });
};

module.exports = { getActiveItems, createItem, markAsBought };