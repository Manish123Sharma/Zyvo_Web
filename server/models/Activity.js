const mongoose = require('../db/connect');
const { Schema, SchemaTypes } = require('../db/connect');

const ActivitySchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    name: {
        type: SchemaTypes.String,
        required: true
    },
    description: {
        type: SchemaTypes.String
    },
    media: [
        {
            type: SchemaTypes.String
        }
    ],
    date: {
        type: SchemaTypes.Date,
        default: SchemaTypes.Date.now,
        required: true
    },
    startTime: {
        type: SchemaTypes.Date,
        default: () => new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        required: true
    },
    distance: {
        type: SchemaTypes.Number,
        required: true
    },
    duration: {
        type: SchemaTypes.String,
        required: true,
        match: /^\d{2}:[0-5]\d:[0-5]\d$/,
        default: '00:00:00'
    },
    avgspeed: {
        type: SchemaTypes.Number,
        required: true
    },
    tag: {
        type: SchemaTypes.String,
        enum: ["race", "commute", "workout"],
    },
    effort: {
        type: String,
        enum: ["easy", "moderate", "hard", "max effort"]
    },
    gear: {
        type: String
    },
    visibility: {
        type: String,
        enum: ["public", "followers", "private"],
        default: "public"
    },
    hiddenDetails: {
        startTime: {
            type: Boolean,
            default: false
        },
        calories: {
            type: Boolean,
            default: false
        },
        speed: {
            type: Boolean,
            default: false
        }
    }
},
    {
        timestamps: true
    }
);

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;