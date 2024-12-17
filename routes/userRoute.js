import express from "express";
import { createUserController, updateUserController } from "../controllers/userController.js";
import { userLogin } from "../services/userService.js";
import Auth from "../middlewares/authMiddleWare.js";
import adminAuth from "../middlewares/adminAuth.js";

const router = express.Router();

router.post('/resgiter',createUserController);
router.post("/login", userLogin)
router.patch('/updateuser/:id',Auth, updateUserController);
router.get('/dashborad',Auth,adminAuth, (req, res)=>{
    res.send({
        msg:"Admin Routes Accesable",
        succes:true,
        error:false
        
    })
});

export default router;
