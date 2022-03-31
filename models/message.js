const { now } = require("lodash");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MessageSchema = new Schema({

    fromUserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    toUserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    message: { type: String, default: null },
    messageFile: { type: String, default: null },
    messageDate: { type: String  },
    status: {
        type: String,
        enum: ['unApproved', 'Approved', 'Rejected'],
        default: 'unApproved'
    },
    messageType: {
        type: String,
        enum: ["Text", "File"],
        default: "Text"
    },
    lastSeen: { type: String },
    createdAt: { type: String },
    updatedAt: { type: String },
    deletedAt: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

});

module.exports = mongoose.model("Message", MessageSchema)
