const multer = require('multer')
const { base64 } = require('js-base64')
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.API_Key,
    api_secret: process.env.API_Secret
})
const videomiddleware = (req,res,next) =>{
const upload = multer({
    storage: multer.memoryStorage(),
    Limits:{ filesize: 100000000},
    
    })

    const fileFilter = function (req, file, cb) {
        const typeArray = file.mimetype.split('/');
        const fileType = typeArray[1];
      
        if (fileType == 'mp4'){
          cb(null, true);
        } else {
          cb(null, false);
        }
      };

    const errorhandler = function(error){
        if(error){
            res.status(400).send({msg:"Invalid File"})
        }
        else{
            const videotData = req.body
            video.push(videotData)
            console.log("video post call executed", videotData)
        }
    };

    const base64string = base64.encode(videotData.buffer);
     cloudinary.uploader.upload(`data:${filedata.mimetype}; base64:${base64string}`)
}