import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
})
module.exports = mongoose.model("User", articleSchema);
