const express = require('express');

const router = express.Router();

router.get('/posts/:postId/:anotherId', (req, res, next) => {
    const { postId, anotherId } = req.params;
    console.log(typeof postId, typeof anotherId);

    // res.statusMessage = 'custom status message';
    // res.status(200).end('hello from router');
    res.json({
        name: 'Pavlo',
    })
})

router.post('/posts', (req, res, next) => {
    try {
        throw new Error('something went wrong')
    } catch (error) {
        next(error)
    }
})

module.exports = {
    router
}