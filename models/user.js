const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    userName: { type: String, required: true },
    email: { type: String, required: true },
    status: {
        type: String,
        enum: ['active', 'inactive', 'deleted'],
        default: 'inactive'
    },
    lastLogin: { type: Date },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
    deletedAt: { type: Date },

    createdBy: { type: Number },
    updatedBy: { type: Number },
    deletedBy: { type: Number }

});

module.exports = mongoose.model("User", UserSchema)
