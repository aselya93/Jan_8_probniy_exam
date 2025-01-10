const router = require('express').Router()
const LikeController = require('../controllers/Like.controller')
const verifyAccessToken = require('../middleware/verifyAccessToken')

router
.get('/', verifyAccessToken, LikeController.getAllLikes)
.get('/:postId', verifyAccessToken, LikeController.getOnePostItem)// покажет карточки, добавленные в избранное
.post('/', verifyAccessToken, LikeController.createLike)
.delete('/:postId', verifyAccessToken, LikeController.deleteLike)




module.exports = router