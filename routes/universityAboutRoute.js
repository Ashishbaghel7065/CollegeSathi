import express from "express";
const router= express.Router();
import{createAllUniversityAboutController,getAllAbout} from  "../controllers/collegeAboutController.js";

router.post("/createabout",createAllUniversityAboutController)
router.get("/getabout",getAllAbout)

export default router;