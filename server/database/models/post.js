const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    songTitle: String,
    songArtist: String,
    songAudio: String,
    imageURL: String,
    userCreator: String,
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;