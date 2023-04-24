const movieModel = require('../models/moviemodel')

const getMovies = async (req, res) => {
    try{
        const movies = await movieModel.find()
        res.send(movies)
    }catch(err){
        console.log("Error fetching data")
        res.send("Error fetching data")
    }
}

const getmoviesById = async (req, res) => {
    const { getmoviesById } = req.params
    try {
        const movie = await movieModel.findById(getmoviesById)
        if(movie){
            res.send({status: 'success', movie: movie});}
        else{
            res.status(404).send({status:'Error', msg: 'movie not found'})
        }
    } catch (err) {
        res.status(400).send({status: 'Error', msg: err.message});
    }
}

const PostMovies = async(req, res) => {
    const moviedata = req.body
    console.log(moviedata)
    try{
    const insertResult = await movieModel.create(moviedata)
    res.status(201).send({status: 'success', movie: insertResult})
    }catch(err){
        res.status(400).send({status: 'error' , msg: 'Internal Error'})
    }
}
const UpdateMovies = async(req,res)=>{
    const {getmoviesById} = req.params
    const data = req.body
    console.log(getmoviesById)
    try{
    const updatedata = await movieModel.findByIdAndUpdate(getmoviesById,data,{new: true})
    res.send({status: "success", updatedata})
    }catch(err){
        res.send("cant update")
    }
}
const DeleteMovies = async(req,res)=>{
    const { getmoviesById } = req.params
    console.log(getmoviesById)
    await movieModel.findByIdAndDelete(getmoviesById)
    res.send("deleted success")
}
module.exports = {
    getMovies,
    getmoviesById,
    PostMovies,
    UpdateMovies,
    DeleteMovies
}