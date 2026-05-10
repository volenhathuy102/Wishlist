const authService = require('../services/authService');

exports.renderLogin = (req, res) => res.render('login');
exports.renderRegister = (req, res) => res.render('register');

exports.register = async (req, res) => {
    try {
        await authService.register(req.body);
        res.redirect('/auth/login');
    } catch (err) { res.status(400).send("Lỗi đăng ký: Tài khoản đã tồn tại"); }
};

exports.login = async (req, res) => {
    try {
        const token = await authService.login(req.body.username, req.body.password);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/wishlist');
    } catch (err) { res.status(401).send(err.message); }
};

exports.logout = (req, res) => { res.clearCookie('token'); res.redirect('/auth/login'); };