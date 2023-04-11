import User from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const login = async function (req, res) {
  const { email, password } = req.body;
  console.log(password);

  const maxAge = 3 * 24 * 60 * 60;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  const user = await User.findOne({ email });

  console.log(user, "user");

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  if (password != user.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });

  res.cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 });

  res.json({
    message: `Hello ${user.name}, Welcome to BMI system!`,
    token: token,
  });
};

export default login;
