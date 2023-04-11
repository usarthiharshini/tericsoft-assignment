import User from "../Models/userModel.js";

const calculateBMI = async function (req, res) {
  const { height, weight } = req.body;

  var bmi = weight / (height * height);

  if (!height || !weight) {
    return res.status(401).json({ message: "Enter valid weight and height" });
  }

  res.json({
    message: `Please find your BMI`,
    BMI: bmi.toFixed(2),
  });
};

export default calculateBMI;
