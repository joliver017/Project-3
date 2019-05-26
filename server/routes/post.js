const express = require('express')
const router = express.Router()
const Post = require('../database/models/post')

router.post('/', (req, res) => {

    const { imageURL, songURL } = req.body

            const newPost = new Post({
                imageURL: imageURL,
                songURL: songURL
            })
            newPost.save((err, savedPost) => {
                if (err) return res.json(err)
                res.json(savedPost)
            })
        }
    )


module.exports = router