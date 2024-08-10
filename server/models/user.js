const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    jobresponses: [
        {
            userId: {
                type: String,
            },
            foundationName: {
                type: String
            },
            role: {
                type: String
            }
        }
    ]
    
}, { timestamps: true });

module.exports = mongoose.model('userMallikors', userSchema);
