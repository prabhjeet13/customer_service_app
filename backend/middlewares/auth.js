const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = async (req,res,next) => {
    try {
    //    console.log(req.body); 
       const {token} = req.body || req.cookies.token; 
    //    console.log('ffhfhf',token);
       if(!token){
         return res.status(404).json({
            success : false,
            message : 'token is missing',
         });
       } 

       const decodepayload = jwt.verify(token,process.env.JWT_SECRET);
       req.user = decodepayload;

       next();

    }catch(error) {
        return res.status(500).json({
            success : false,
            message : `${error}`,
        })
    }
}