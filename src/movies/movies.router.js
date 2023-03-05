const router = require('express').Router()

const movieServices = require('./movies.services')
const upload = require('../utils/multer')
const genderServices=require('../genres/genres.services')
router.route('/')
    .get(movieServices.getAllMovies)
    .post(upload.single('movieVideo') ,movieServices.postMovie)

router.route('/movies/:movies_id/gender/:gender_id',movieServices.postMovie, genderServices.postGenre )
       
module.exports = router

//! post /movies/:movies_id/gender/:gender_id