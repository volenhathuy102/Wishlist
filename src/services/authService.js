const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await User.create({ ...data, password: hashedPassword });
};

exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
    }
    throw new Error("Tài khoản hoặc mật khẩu không chính xác");
};