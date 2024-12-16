import express from "express";
import {
  createUserController,
  UserloginCotroller,
} from "../controllers/userController.js";
import Auth from "../middlewares/authMiddleWare.js";

const router = express.Router();

router.post("/", createUserController);
router.post("/login", UserloginCotroller);
export default router;
