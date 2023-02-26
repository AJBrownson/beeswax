const express = require('express')

const router = express.Router()

const {
    getAllComments,
    addComment,
    updateComment,
    deleteComment
} = require('../../controllers/clientControllers/guestBookControllers')


// CHAINING THE ROUTES
router.route('/').get(getAllComments).post(addComment)
router.route('/:id').put(updateComment).delete(deleteComment)


module.exports = router