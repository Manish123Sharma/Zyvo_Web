const Photos = require('../models/Photos');
const multer = require('multer');
const cloudinary = require('cloudinary');
const fs = require('fs');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const upload = multer({ dest: 'uploads/' });

exports.uploadPhotos = [
    upload.array('photos', 20),
    async (req, res) => {
        try {
            const userId = req.body.userId; // from frontend (must send userId along with request)

            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: 'No photos uploaded' });
            }

            let uploadedPhotos = [];

            for (const file of req.files) {
                // upload to cloudinary
                const result = await cloudinary.uploader.upload(file.path, {
                    folder: `user_photos/${userId}`,
                });

                // save in DB
                const photoDoc = new Photos({
                    user_id: userId,
                    photo_url: result.secure_url,
                });
                await photoDoc.save();

                uploadedPhotos.push(photoDoc);

                // remove local temp file
                fs.unlinkSync(file.path);
            }

            res.status(201).json({
                message: 'Photos uploaded successfully',
                photos: uploadedPhotos,
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
];