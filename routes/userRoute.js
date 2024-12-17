import express from "express";
import { createUserController, forgetPasswordController, updateUserController, UserloginCotroller } from "../controllers/userController.js";
import Auth from "../middlewares/authMiddleWare.js";
import adminAuth from "../middlewares/adminAuth.js";

const router = express.Router();

router.post('/resgiter',createUserController);
router.post("/login", UserloginCotroller)
router.patch('/updateuser/:id',Auth, updateUserController);
router.get('/dashborad',Auth,adminAuth, (req, res)=>{
    res.send({
        msg:"Admin Routes Accesable",
        succes:true,
        error:false
        
    })
});
router.get('/forget-password',Auth,forgetPasswordController);
export default router;
