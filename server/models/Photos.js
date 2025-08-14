const mongoose = require('../db/connect');
const { Schema, SchemaTypes } = require('../db/connect');

const PhotoSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    photo_url: {
        type: String,
        required: true,
        index: true
    }
},
    {
        timestamps: true
    }
);

const Photos = mongoose.model('Photos', PhotoSchema);

module.exports = Photos;