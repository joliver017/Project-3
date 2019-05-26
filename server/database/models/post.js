const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    songURL: String,
    imageURL: String,
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;