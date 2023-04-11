import User from "../Models/userModel.js";

const getCalculationHistory = async function (req, res) {
  const { _id } = req.params;

  const user = await User.findOne({ _id });

  console.log(user, "user");

  if (!user) {
    return res
      .status(401)
      .json({ message: "User with given id doesn't exist" });
  }

  res.json({
    message: `User found!`,
    BMIs: user.bmis,
  });
};

export default getCalculationHistory;
