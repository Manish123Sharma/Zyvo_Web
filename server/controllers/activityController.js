import Activity from '../models/Activity';
const multer = require('multer');
const cloudinary = require('cloudinary');
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const upload = multer({ dest: "uploads/" });

exports.uploadActivity = async (req, res) => {
    try {
        console.log('Activity');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};