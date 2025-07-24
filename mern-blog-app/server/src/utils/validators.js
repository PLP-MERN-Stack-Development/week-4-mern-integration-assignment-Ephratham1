const Joi = require('joi');

const postValidator = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(10).required(),
    category: Joi.string().required(),
    image: Joi.string().uri().optional(),
});

const userValidator = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const commentValidator = Joi.object({
    postId: Joi.string().required(),
    content: Joi.string().min(1).required(),
    author: Joi.string().optional(),
});

module.exports = {
    postValidator,
    userValidator,
    commentValidator,
};