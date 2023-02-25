const express = require('express')

const router = express.Router()

const {
    getComment,
    getOneComment,
    addComment,
    updateComment,
    deleteComment
} = require('../../controllers/clientControllers/guestBookController')


// CHAINING THE ROUTES
router.route('/').get(getComment, getOneComment).post(addComment)
router.route('/:id').put(updateComment).delete(deleteComment)


module.exports = router