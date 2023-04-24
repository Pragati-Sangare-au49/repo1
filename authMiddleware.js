const jwt = require('jsonwebtoken')
const authMiddleware = (req,res,next) => {
    console.log("authmiddleware executed")

    const token = req.cookies.jwt;
    if(token){
        try{
        const userPayload = jwt.verify(token, process.env.KeySecret)
        next()
        }
        catch(err){
            res.status(401).send({status: 'Error', msg: 'Invalid Token'})
        }
    }
    else{
        res.status(401).send({status: 'Error', msg: 'Token not present try to login first'})
    }
}

module.exports = {
    authMiddleware
}