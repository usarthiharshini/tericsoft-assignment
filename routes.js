import express from "express";
import signUp from "./Controllers/signUp.js";
import login from "./Controllers/login.js";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import getProfile from "./Controllers/getProfile.js";
import calculateBMI from "./Controllers/calculateBMI.js";
import getCalculationHistory from "./Controllers/getCalculationHistory.js";
import logout from "./Controllers/logout.js";
import authMiddleware from "./Controllers/auth.js";
const router = express.Router();

router.route("/register").post(signUp);

router.route("/login").post(login);

router.route("/getProfile/:_id").get(getProfile);

router.route("/calculateBMI/:_id").post(calculateBMI);

router.route("/getCalculationHistory/:_id").get(getCalculationHistory);

router.route("/logout").get(logout);

export default router;
