const router = require('express').Router()
const verifyAccessToken = require('../middleware/verifyAccessToken')
const CommentController = require('../controllers/Comment.controller')

router
.get('/postId', verifyAccessToken, CommentController.getAllComments)
.post('/postId', verifyAccessToken, CommentController.createComment)
.delete('/:id', verifyAccessToken, CommentController.deleteComment)

module.exports = router