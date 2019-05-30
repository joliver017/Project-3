const express = require('express')
const router = express.Router()
const Post = require('../database/models/post')

router.post('/', (req, res) => {

    const { imageURL, songURL, songTitle, songArtist } = req.body

            const newPost = new Post({
                imageURL: imageURL,
                songURL: songURL,
                songTitle: songTitle,
                songArtist: songArtist
            })
            newPost.save((err, savedPost) => {
                if (err) return res.json(err)
                res.json(savedPost)
            })
        }
    )

router.get('/', (req, res) => {
    Post.find({ }, (err, post) => {
        if (err) {
            console.log('Post.js post error: ', err)
        } else if (post) {
            res.json({ post: post })
        }
})
})


module.exports = router