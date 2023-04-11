import User from "../Models/userModel.js";

const calculateBMI = async function (req, res) {
  try {
    const { height, weight } = req.body;
    const { _id } = req.params;

    var bmi = weight / (height * height);

    if (!height || !weight) {
      return res.status(401).json({ message: "Enter valid weight and height" });
    }
    const user = await User.findByIdAndUpdate(
      _id,
      { $push: { bmis: bmi } },
      { new: true }
    );

    console.log(user, "user");

    if (!user) {
      return res
        .status(401)
        .json({ message: "User with given id doesn't exist" });
    }

    res.json({
      user: user ? `${user.name}` : "No user found",
      BMI: bmi.toFixed(2),
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Something went wrong" });
  }
};

export default calculateBMI;
