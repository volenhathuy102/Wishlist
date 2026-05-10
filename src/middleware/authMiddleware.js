const jwt = require('jsonwebtoken');
exports.protect = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.redirect('/auth/login');
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) { res.clearCookie('token'); res.redirect('/auth/login'); }
};