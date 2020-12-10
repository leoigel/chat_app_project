const User = require('../models').User
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.login = async (req,res) => {
   try{
    const {email,password} = req.body;
    const user = await User.findOne({where:{email}});
    if(!user) {
        return res.status(404).json({
          message:'user not found'
        })
      }
    if(!await bcrypt.compare(password,user.password)) return res.status(401).json({message:'incorrect password or email'})
    // user.avatar = 
    
    const token = jwt.sign(user.id,process.env.SECRET_TOKEN)
    const userInstance = user;
    userInstance.avatar = user.avatar
    res.json({...userInstance.get({raw:true}),token})

   }catch(e) {
       res.status(500).json({message:e.message})
   }
}

exports.register = async (req,res) => {
    try{
    const {email} = req.body;
    const existuser = await User.findOne({where:{email}});
    if(existuser) return res.json({message:'user already exist'})
     const user = await User.create(req.body);

     const token = jwt.sign(user.id,process.env.SECRET_TOKEN);
      
     res.json({...user.get({raw:true}),token})
 
    }catch(e) {
        res.status(500).json({message:e.message})
    }
 }