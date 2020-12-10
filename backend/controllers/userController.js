const User = require('../models').User
const sequelize = require('sequelize')

exports.update = async (req,res) => {
  if(req.file) {
      console.log(req.file.filename)
      req.body.avatar = req.file.filename
  }
  const [rows,result] = await User.update(req.body,{where:{id:req.user.id},
    returning:true,
    individualHooks:true
})
   const user = result[0].get({raw:true})
   user.avatar = result[0].avatar
   delete user.password
   res.json(user)
}