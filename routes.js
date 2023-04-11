
import express from 'express';

import signUp from './Controllers/signUp.js';
import login from './Controllers/login.js';

const router= express.Router();

router.route('/register').post(signUp)

router.route('/login').post(login)


export default router;