
import express from 'express';
import signUp from './Controllers/signUp.js';
import login from './Controllers/login.js';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import getProfile from './Controllers/getProfile.js';

const router= express.Router();



router.route('/register').post(signUp)

router.route('/login').post(login)

router.route('/getProfile').post(getProfile)


export default router;