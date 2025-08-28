const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const updateProfileController = require('../controllers/updateProfileController');
const photoController = require('../controllers/photosController');
const videoController = require('../controllers/videosController');

router.post('/register', authController.registerUser);

router.post('/login', authController.loginUser);

router.post('/updatePass', authController.updatePassword);

router.post('/updateProfile', updateProfileController.updateProfile);

router.post(
    '/profilePic',
    updateProfileController.uploadMiddleware,
    updateProfileController.uploadProfilePic
);

router.post(
    '/uploadPhotos',
    photoController.uploadPhotos
);

router.post(
    '/uploadVideos',
    videoController.uploadVideos
);

module.exports = router;
