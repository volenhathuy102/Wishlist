const Wishlist = require('../models/Wishlist');

exports.getItems = async (userId) => {
    return await Wishlist.find({ userId, isBought: false }).sort('-createdAt');
};

exports.createItem = async (data, userId) => {
    return await Wishlist.create({ ...data, userId });
};

exports.updateItem = async (id, data, userId) => {
    return await Wishlist.findOneAndUpdate({ _id: id, userId }, data, { new: true });
};

exports.deleteItem = async (id, userId) => {
    return await Wishlist.findOneAndUpdate({ _id: id, userId }, { isBought: true });
};