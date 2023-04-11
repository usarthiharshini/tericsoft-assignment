import User from '../Models/userModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import Cookies from 'js-cookie';
dotenv.config()



const login = async function(req, res)  {

 /*  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); */

    const { email, password } = req.body;
    console.log(password);
  
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }
  
    const user = await User.findOne({ email });
  
    console.log(user,"user");
  
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  
    if (password != user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET, { expiresIn: '1h' }
      );
    
      res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });

     

      res.json({
         message: `Hello ${user.name}, Welcome to BMI system!`, 
        token: token
       
      });



}

export default login;