const jwt = require('jsonwebtoken');

const User = require('../../models').User
module.exports = async (req,res,next) => {
    try {
    let token = req.headers.authorization.split(" ")[1];
      console.log(token)
    if (!token) {
        return res.status(401).json({
          msg: "No token, auth denied",
        });
      }
    const decode = await jwt.verify(token,process.env.SECRET_TOKEN)

    const user = await User.findOne({where:{id:decode}});
    req.user = user;
    next()
    }catch(error) {
        return res.status(500).json({ error: "Not Authorized" });
    }
}

 