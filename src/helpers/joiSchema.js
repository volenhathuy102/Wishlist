const Joi = require('joi');

const wishlistSchema = Joi.object({
    productName: Joi.string().min(2).max(100).required(),
    price: Joi.string().allow(''),
    imageUrl: Joi.string().uri().allow('')
});

const authSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

module.exports = { wishlistSchema, authSchema };