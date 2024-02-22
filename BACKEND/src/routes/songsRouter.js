const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songsController')

router.post('/songs',songsController.createSong)
router.get('/songs',songsController.createSong)









module.exports = router;