const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FavoriteSchema = new Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    donorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Profile' },
    createdAt: { type: String }
});

module.exports = mongoose.model("Favorite", FavoriteSchema)
