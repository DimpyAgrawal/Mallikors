const mongoose  = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const applicationSchema = new mongoose.Schema({
    ownerName:{
        type: String,
        required : true
    },
    jobTitle:{
        type: String,
        required : true
    },
    salary:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    postedBy:{
        type: ObjectId,
        ref: 'userMallikors'
    }
    
})

module.exports = mongoose.model('jobAppliction',applicationSchema);