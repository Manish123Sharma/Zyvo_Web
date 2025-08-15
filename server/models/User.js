const mongoose = require('../db/connect');
const { Schema, SchemaTypes } = mongoose;
const { v4: uuidv4 } = require('uuid');

const UserSchema = new Schema({
    user_id: {
        type: SchemaTypes.String,
        unique: true,
        index: true
    },
    fullName: {
        type: SchemaTypes.String,
        required: true,
        index: true,
        trim: true
    },
    password: {
        type: SchemaTypes.String,
        required: true,
        minlength: 6,
        index: true,
    },
    email: {
        type: SchemaTypes.String,
        required: true,
        unique: true,
        match: /.+@.+\..+/,
        index: true,
        lowercase: true
    },
    bio: {
        type: SchemaTypes.String,
        maxlength: 500,
        index: true,
    },
    profile_pic: {
        type: SchemaTypes.Buffer
    },
    city: {
        type: SchemaTypes.String,
        required: true,
    },
    state: {
        type: SchemaTypes.String,
        required: true,
    },
    gender: {
        type: SchemaTypes.String,
        enum: ['male', 'female', 'other'],
    },
    followers: {
        type: SchemaTypes.Number,
        required: true
    },
    following: {
        type: SchemaTypes.Number,
        required: true
    },
    activity: {
        // ref: 'Activity',
        noofActivities: {
            type: SchemaTypes.Number,
            time: {
                type: SchemaTypes.String,
                required: true,
                match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                default: '00:00:00'
            },
            required: true
        },
        noofActivities_Year: {
            type: SchemaTypes.Number,
            time: {
                type: SchemaTypes.String,
                required: true,
                match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                default: '00:00:00'
            },
            required: true
        },
        ride: {
            // ref: 'Ride',
            total_kms: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            },
            numberofRides: {
                type: SchemaTypes.Number,
                required: true
            },
            numberofRides_Year: {
                type: SchemaTypes.Number,
                required: true
            },
            total_kms_year: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            },
            longest_Ride: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            },
        },
        walk: {
            total_kms: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            },
            numberofWalks: {
                type: SchemaTypes.Number,
                required: true
            },
            numberofWalks_Year: {
                type: SchemaTypes.Number,
                required: true
            },
            total_kms_year: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            },
            longest_Walk: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            }
        },
        run: {
            total_kms: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            },
            numberofRuns: {
                type: SchemaTypes.Number,
                required: true
            },
            numberofRuns_Year: {
                type: SchemaTypes.Number,
                required: true
            },
            total_kms_year: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            },
            longest_Run: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            }
        },
        workout: {
            total_kms: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            },
            numberofWorkouts: {
                type: SchemaTypes.Number,
                required: true
            },
            numberofWorkouts_Year: {
                type: SchemaTypes.Number,
                required: true
            },
            total_kms_year: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            },
            longest_Workout: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                required: true
            }
        }
    },
    subscription: {
        type: SchemaTypes.String,
        enum: ['free', 'premium'],
        default: 'free'
    },
    two_factor_auth: {
        type: SchemaTypes.Number,
        required: true
    },
    phoneNumber: {
        type: SchemaTypes.String,
        required: true,
        unique: true,
        index: true
    },
    primarySport: {
        type: SchemaTypes.String,
        enum: ['Ride', 'Run', 'Swim', 'Walk', 'Workout'],
    },
    dateOfBirth: {
        type: SchemaTypes.Date,
        required: true
    },
    weight: {
        type: SchemaTypes.Number
    },
    weightUnit: {
        type: SchemaTypes.String,
        enum: ['kg', 'lbs'],
        default: 'kg'
    },
    height: {
        type: SchemaTypes.Number
    },
    heightUnit: {
        type: SchemaTypes.String,
        enum: ['cm', 'ft'],
        default: 'cm'
    },
},
    {
        timestamps: true
    }
);


UserSchema.pre('save', function (next) {
    // Generate unique user_id if not present
    if (!this.user_id) {
        this.user_id = uuidv4();
    }

    // Trim and clean name
    if (this.fullName) {
        this.fullName = this.fullName.trim();
    }

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;