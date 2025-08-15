const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

exports.registerUser = (req, res) => {
    res.send("User registered");
};

exports.loginUser = (req, res) => {
    res.send("User logged in");
};