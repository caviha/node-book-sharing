
const express = require('express');
const asynHandler = require('express-async-handler');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { default: mongoose } = require('mongoose');
//const auth = require('../middlewares/auth');
const NODE_ENV = process.env.NODE_ENV;





const isAuthenticated = (req, res, next) => {
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
};








 

//Route to register of new users
 router.post('/signUp',(req, res)=>{
   //check the email if it already exists
   //console.log(JSON.stringify(req.body));
   User.find({email: req.body.email})
   .exec(console.log(req.body.password))
   .then(
      
         bcrypt.hash(req.body.password, 10, (err, hash)=>{
            
            if(err){
               return res.status(50).json({
                  error: err
               });
               //if the password is hashed successful create a user from the model with the attributes and save in the database
            }else{
               const user = new User({
                  name: req.body.name,
                  email: req.body.email,
                  password: hash,
                  
                 
               });

               console.log(user)
         
               user
               .save()
               .then(result=>{
                  res.status(201).json({
                     message: 'User created'
                     
                  });

               })
               .catch(err=>{
                  res.status(300).json({
                     error: err
                  })
               });
            }
         })
   )
      });
   



   

 //route for logging in users
   router.post('/signIn',(req, res, next)=>{
   
      return User.find({email: req.body.email})
     .then(user =>{

         if(user.length<1) { // User not found!
             console.log("User with the email" + req.body.email + "not found!");
             return res.status(401).json({
                 message:'Authentication failed'
             });
         }
 
      
         console.log(req.body.email);
         
         bcrypt.compare(req.body.password, user[0].password, (err, result)=> {
             if(err){
                 console.error('Error during comparison!', err);
                 return res.status(401).json({
                     message:'Authentication error'
                 });
             }
             if(result){
                //Generate a jwebtoken and store in an httpOnly cookie
                const token = jwt.sign({
                  email: user[0].email,
                  userId: user[0]._id
                 }, process.env.JWT_KEY,
                 {
                  expiresIn: "1d"
                 })

                 //server sends a response to the client containing cookie that is stored in the browser 
                  return res
                  .cookie("access-token", token, {
                     httpOnly: true
                    // secure: process.env.NODE_ENV === 'prodution' ? true: false,
                     //httpOnly: process.env.NODE_ENV === 'prodution' ? true: false
                  })
                  
                  .status(200)
                  .json(
                     console.log(
                        
                     )
                  )
                 
             }
             return res.status(500);
             
         });
     })
     .catch(err=>{
         console.log(err);
         res.status(500).json({
             error:err
         });
     });
      
     
   });



   










//log out route const  
 
router.post('/', (req, res) => {
  
   console.log(req.headers['access-token'])
  
   res.cookie("access-token", "");
   
   
   res.json(console.log("log out"))
   
});







//route to delete a user
router.delete('/:id', (async(req, res)=>{
    
   try{
       const user = await User.findByIdAndDelete(req.params.id);
       res.status(200).json({
           message: 'User deleted'
       })
   }
   catch(error){
        res.json(error);
   }
}))











  //route to update user profile
router.put('/:id', (req, res)=>{
   const user =  User.findById(req.params.id);
   if(user){
       const updatedUser = User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true} );
       res.status(200).json(updatedUser);
   }else{
       res.status(500);
       throw new error('update failed'); 
   }
});






//route to fetch users
router.get('/fetchUser', ( async(req, res)=>{
   const user = await User.find({});
   if(user){
       res.status(200);
       res.json(user);
}else{
   res.status(500);
   throw new error('There are no users')
}
}
));




 

 module.exports = router;
 
