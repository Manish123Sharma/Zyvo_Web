const mongoose = require('../db/connect');
const { Schema, SchemaTypes } = require('../db/connect');

const UserSchema = new Schema({
    user_id: {
        type: SchemaTypes.String,
        required: true,
        unique: true,
        index: true
    },
    fullName: {
        type: SchemaTypes.String,
        required: true,
        index: true,
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
        index: true
    },
    bio: {
        type: SchemaTypes.String,
        maxlength: 500,
        index: true,
    },
    profile_pic: {
        type: SchemaTypes.Buffer,
        required: true,
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
        required: true,
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
        ref: 'Activity',
        noofActivities: {
            type: SchemaTypes.Number,
            time: {
                type: SchemaTypes.Number,
                required: true
            },
            required: true
        },
        noofActivities_Year: {
            type: SchemaTypes.Number,
            time: {
                type: SchemaTypes.Number,
                required: true
            },
            required: true
        },
        ride: {
            ref: 'Ride',
            total_kms: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.Number,
                    required: true
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
                    type: SchemaTypes.Number,
                    required: true
                },
                required: true
            },
            longest_Ride: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.Number,
                    required: true
                },
                required: true
            },
        },
        walk: {
            total_kms: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.Number,
                    required: true
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
                    type: SchemaTypes.Number,
                    required: true
                },
                required: true
            },
            longest_Walk: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.Number,
                    required: true
                },
                required: true
            }
        },
        run: {
            total_kms: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.Number,
                    required: true
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
                    type: SchemaTypes.Number,
                    required: true
                },
                required: true
            },
            longest_Run: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.Number,
                    required: true
                },
                required: true
            }
        },
        workout: {
            total_kms: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.Number,
                    required: true
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
                    type: SchemaTypes.Number,
                    required: true
                },
                required: true
            },
            longest_Workout: {
                type: SchemaTypes.Number,
                time: {
                    type: SchemaTypes.Number,
                    required: true
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
    }
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;