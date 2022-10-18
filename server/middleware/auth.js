const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    const token = req.headers['access-token']
    if(!token){
       return res.status(300);
    }try{
        const data = jwt.verify(token, process.env.JWT_KEY);
        req.email = data.email;
        req.userId = data.userId;
        console.log(token)
        return next();
    }catch{
        return res.status(300)
    }
}