import express from "express";
import { createUserController, UserloginCotroller } from "../controllers/userController.js";

const router = express.Router();

router.post('user/create',createUserController);
router.post("user/login",UserloginCotroller)

export default router;
