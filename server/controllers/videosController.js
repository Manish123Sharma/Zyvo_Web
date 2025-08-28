const Videos = require('../models/Videos');
const multer = require('multer');
const cloudinary = require('cloudinary');
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const upload = multer({ dest: "uploads/" });

exports.uploadVideos = [
    upload.array('videos', 2),
    async (req, res) => {
        try {
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: "No videos uploaded" });
            }

            const userId = req.user._id; // assuming you store user in req.user after auth
            const uploadedVideos = [];

            for (const file of req.files) {
                // Upload video to Cloudinary
                const result = await cloudinary.uploader.upload(file.path, {
                    resource_type: "video",
                    folder: "user_videos",
                });

                // Cleanup local temp file
                fs.unlinkSync(file.path);

                // Extract duration & check limit
                const duration = Math.round(result.duration); // in seconds
                if (duration > 25) {
                    // Delete oversized video from Cloudinary
                    await cloudinary.uploader.destroy(result.public_id, { resource_type: "video" });
                    return res.status(400).json({ message: "Video exceeds 25 seconds limit" });
                }

                // Generate thumbnail (Cloudinary transformation)
                const thumbnailUrl = cloudinary.url(result.public_id + ".jpg", {
                    resource_type: "video",
                    format: "jpg",
                    transformation: [{ width: 400, height: 400, crop: "fill" }]
                });

                // Save video info in DB
                const videoDoc = new Videos({
                    user_id: userId,
                    video_url: result.secure_url,
                    thumbnail_url: thumbnailUrl,
                    duration
                });

                await videoDoc.save();
                uploadedVideos.push(videoDoc);
            }

            return res.status(201).json({
                message: "Videos uploaded successfully",
                videos: uploadedVideos
            });

        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
];