const express = require('express');
const router = express.Router();

const photoController = require('../controllers/photosController');
const videoController = require('../controllers/videosController');

router.post(
    '/uploadPhotos',
    photoController.uploadPhotos
);

router.post(
    '/uploadVideos',
    videoController.uploadVideos
);

module.exports = router;