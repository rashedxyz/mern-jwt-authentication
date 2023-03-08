import express from 'express';

import { signupUser, loginUser } from "../controllers/userControllers.js";

const router = express.Router();

// signup route
router.post('/signup', signupUser);

// login route
router.post('/login', loginUser);


export default router;