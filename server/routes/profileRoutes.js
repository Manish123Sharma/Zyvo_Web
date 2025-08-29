const express = require('express');
const router = express.Router();
const updateProfileController = require('../controllers/updateProfileController');


router.post('/updateProfile', updateProfileController.updateProfile);

router.post(
    '/profilePic',
    updateProfileController.uploadMiddleware,
    updateProfileController.uploadProfilePic
);

module.exports = router;