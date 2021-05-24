
const mongoose = require('mongoose');
const DetailSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'professional'
    },
    address: {
        type: String,
    },
    socialUrl: {
        type: String,
    },
    designation: {
        type: String,
        required: true
    },
    department: {
        type: String,

    },
    otherDetails: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('detail', DetailSchema);