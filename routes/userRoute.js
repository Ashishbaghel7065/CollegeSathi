import express from "express";
import {
  createUserController,
  forgetPasswordController,
  getAllUserController,
  updatePasswordController,
  updateUserController,
  UserloginCotroller,
} from "../controllers/userController.js";
import Auth from "../middlewares/authMiddleWare.js";
import adminAuth from "../middlewares/adminAuth.js";

const router = express.Router();

router.post("/resgiter", createUserController);
router.post("/login", UserloginCotroller);
router.patch("/updateuser/:id", Auth, updateUserController);

router.get("/dashborad", Auth, adminAuth, (req, res) => {
  res.send({
    msg: "Admin Routes Accesable",
    succes: true,
    error: false,
  });
});
router.get("/forget-password", Auth, forgetPasswordController);
router.patch("/updatePassword/:id", updatePasswordController);
router.get("/getusers", Auth, adminAuth, getAllUserController);
export default router;
