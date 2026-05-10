const wishlistService = require('../services/wishlistservice');

exports.renderWishlist = async (req, res) => {
    const items = await wishlistService.getItems(req.user.id);
    res.render('wishlist', { items, username: req.user.username });
};

exports.addItem = async (req, res) => {
    await wishlistService.createItem(req.body, req.user.id);
    res.redirect('/wishlist');
};

exports.editItem = async (req, res) => {
    await wishlistService.updateItem(req.params.id, req.body, req.user.id);
    res.redirect('/wishlist');
};

exports.updateStatus = async (req, res) => {
    await wishlistService.deleteItem(req.params.id, req.user.id);
    res.redirect('/wishlist');
};