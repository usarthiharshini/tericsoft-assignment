import User from "../Models/userModel.js";

const signUp = async function (req, res) {
  try {
    const userexists = await User.findOne({ email: req.body.email });

    if (userexists) {
      return res.status(401).json({
        message: "User exists, Please Login",
      });
    }

    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    const user = new User(newUser);
    user
      .save()
      .then(() => {
        return res.send({
          message: "User saved successfully",
          data: user,
        });
      })
      .catch((error) => {
        return res.status(401).json({
          message: error.message,
        });
      });
  } catch (error) {
    console.log(error);
    return res.send({
      message: error,
    });
  }
};

export default signUp;
