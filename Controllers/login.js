import User from '../Models/userModel.js';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv'
dotenv.config()

const login = async function(req, res)  {

    const { email, password } = req.body;
    console.log(email);
  
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }
  
    const user = await User.findOne({ email });
  
    console.log(user);
  
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  
    if (password != user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET
      );
    
      res.json({
        message: `Hello ${user.name}, Welcome to BMI system!`,
        token: token
       
      });



}

export default login;