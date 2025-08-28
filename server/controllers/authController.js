const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};

exports.registerUser = async (req, res) => {
    // res.send("User registered");
    try {
        const {
            fullName,
            password,
            email,
            city,
            state,
            phoneNumber,
            dateOfBirth,
            gender
        } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await User.create({
            fullName,
            password,
            email,
            city,
            state,
            phoneNumber,
            dateOfBirth,
            gender
        });

        res.status(201).json({
            _id: user.id,
            fullName: user.fullName,
            email: user.email,
            city: user.city,
            state: user.state,
            phoneNumber: user.phoneNumber,
            dateOfBirth: user.dateOfBirth,
            bio: user.bio,
            gender: user.gender
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email
        });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user.id,
                fullName: user.fullName,
                email: user.email,
                token: generateToken(user.id)
            });
        } else {
            res.status(401).json({
                message: 'Invalid email or password'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

exports.updatePassword = async (req, res) => {
    try {
        const { userId, oldPassword, newPassword } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const passMatch = await user.matchPassword(oldPassword);
        if (!passMatch) {
            return res.status(400).json({ message: "Old password is incorrect" });
        }
        user.password = newPassword;
        await user.save();
        res.status(200).json({ message: "Password updated successfully" });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

exports.googleLogin = async (req, res) => {
    try {
        console.log('Google Login');
    } catch (err) {
        console.log(`Error: ${err}`);
    }
};

exports.fbLogin = async (req, res) => {
    try {
        console.log('Facebook Login');
    } catch (err) {
        console.log(`Error: ${err}`);
    }
};