const Wishlist = require('../models/Wishlist');

exports.renderWishlist = async (req, res) => {
    try {
        const items = await Wishlist.find({ isBought: false }).sort('-createdAt');
        res.render('wishlist', { items }); 
    } catch (err) {
        res.status(500).send("Lỗi tải dữ và hiển thị");
    }
};

exports.addItem = async (req, res) => {
    try {
        await Wishlist.create(req.body);
        res.redirect('/wishlist');
    } catch (err) {
        res.status(400).send("Lỗi thêm món đồ");
    }
};

exports.updateStatus = async (req, res) => {
    try {
        await Wishlist.findByIdAndUpdate(req.params.id, { isBought: true });
        res.redirect('/wishlist');
    } catch (err) {
        res.status(404).send("Lỗi cập nhật trạng thái");
    }
};