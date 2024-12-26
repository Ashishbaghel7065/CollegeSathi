import express from "express";
const router= express.Router();
import{createAllUniversityAboutController,getAllAbout} from  "../controllers/collegeAboutController.js";
import Auth from "../middlewares/authMiddleWare.js";
import adminAuth from "../middlewares/adminAuth.js";

router.post("/createabout",Auth,adminAuth,createAllUniversityAboutController)
router.get("/getabout",getAllAbout)

export default router;