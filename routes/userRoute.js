import express from "express";
import { createUserController } from "../controllers/userController.js";

const router = express.Router();

router.post('/',createUserController);

export default router;
