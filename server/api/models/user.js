const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required: true},
    email: {type: String, required: true},
    role: {type: Number, required: true},
    deleted: {type:Boolean, default: false}
})

module.exports = mongoose.model('Users', userSchema);
