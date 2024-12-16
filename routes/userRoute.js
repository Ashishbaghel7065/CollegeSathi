import express from "express";
import { createUserController, updateUserController } from "../controllers/userController.js";

const router = express.Router();

router.post('/',createUserController);
router.patch('/updateuser/:id', updateUserController);
export default router;
