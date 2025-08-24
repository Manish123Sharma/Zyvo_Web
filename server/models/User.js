const mongoose = require('../db/connect');
const { Schema, SchemaTypes } = mongoose;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

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
        default: ''
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
        required: true
    },
    followers: {
        type: SchemaTypes.Number,
        default: 0
    },
    following: {
        type: SchemaTypes.Number,
        default: 0
    },
    activity: {
        // ref: 'Activity',
        noofActivities: {
            type: SchemaTypes.Number,
            default: 0,
            time: {
                type: SchemaTypes.String,
                required: true,
                match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                default: '00:00:00'
            },
            // required: true
        },
        noofActivities_Year: {
            type: SchemaTypes.Number,
            time: {
                type: SchemaTypes.String,
                required: true,
                match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                default: '00:00:00'
            },
            default: 0
            // required: true
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
                default: 0
                // required: true
            },
            numberofRides: {
                type: SchemaTypes.Number,
                // required: true
                default: 0
            },
            numberofRides_Year: {
                type: SchemaTypes.Number,
                // required: true
                default: 0
            },
            total_kms_year: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                // required: true
                default: 0
            },
            longest_Ride: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                // required: true
                default: 0
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
                // required: true
                default: 0
            },
            numberofWalks: {
                type: SchemaTypes.Number,
                // required: true
                default: 0
            },
            numberofWalks_Year: {
                type: SchemaTypes.Number,
                // required: true
                default: 0
            },
            total_kms_year: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                // required: true
                default: 0
            },
            longest_Walk: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                // required: true
                default: 0
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
                // required: true
                default: 0
            },
            numberofRuns: {
                type: SchemaTypes.Number,
                // required: true
                default: 0
            },
            numberofRuns_Year: {
                type: SchemaTypes.Number,
                // required: true
                default: 0
            },
            total_kms_year: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                // required: true
                default: 0
            },
            longest_Run: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                // required: true
                default: 0
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
                // required: true
                default: 0
            },
            numberofWorkouts: {
                type: SchemaTypes.Number,
                // required: true
                default: 0
            },
            numberofWorkouts_Year: {
                type: SchemaTypes.Number,
                // required: true
                default: 0
            },
            total_kms_year: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                // required: true
                default: 0
            },
            longest_Workout: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.String,
                    required: true,
                    match: /^\d{2}:[0-5]\d:[0-5]\d$/,
                    default: '00:00:00'
                },
                // required: true
                default: 0
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
        required: true,
        default: false
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
        type: SchemaTypes.Number,
        default: 0
    },
    weightUnit: {
        type: SchemaTypes.String,
        enum: ['kg', 'lbs'],
        default: 'kg'
    },
    height: {
        type: SchemaTypes.Number,
        default: 0
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


UserSchema.pre('save', async function (next) {
    // Generate unique user_id if not present
    if (!this.user_id) {
        this.user_id = uuidv4();
    }

    // Trim and clean name
    if (this.fullName) {
        this.fullName = this.fullName.trim();
    }

    if (!this.isModified("password")) { return next(); }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

// Compare entered password with hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;