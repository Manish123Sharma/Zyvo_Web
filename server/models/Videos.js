const mongoose = require('../db/connect');
const { Schema, SchemaTypes } = require('../db/connect');

const VideoSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    video_url: {
        type: String,
        required: true,
        index: true
    },
    thumbnail_url: {
        type: String
    },
    duration: {
        type: Number,
        required: true
    },
},
    {
        timestamps: true
    }
);

const Videos = mongoose.model('Videos', VideoSchema);

module.exports = Videos;