const { Router } = require('express')
const {getMovies,getmoviesById,PostMovies,UpdateMovies,DeleteMovies} = require('../controllers/moviecontroller')
const { authMiddleware } = require('../Middlewares/authMiddleware')
const movieRouter = Router()

movieRouter.use(authMiddleware)

movieRouter.get('/',getMovies)
movieRouter.get('/:getmoviesById',getmoviesById)
movieRouter.post('/',PostMovies)
movieRouter.put('/:getmoviesById',UpdateMovies)
movieRouter.delete('/:getmoviesById',DeleteMovies)

module.exports = movieRouter