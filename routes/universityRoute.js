import express from "express";
import {
  createAllUniversityController,
  deleteDocumentController,
  getAllDataController,
  updateAllDataController,
} from "../controllers/collegeDuniaController.js";
import Auth from "../middlewares/authMiddleWare.js";
import adminAuth from "../middlewares/adminAuth.js";

const router = express.Router();
import upload from "../utils/multer.js";

router.post("/university/create",Auth,adminAuth, createAllUniversityController);

router.patch("/university/update/:id",Auth,adminAuth, updateAllDataController);


router.get("/university/getdata", getAllDataController);
router.delete("/university/delete/:id",Auth,adminAuth,deleteDocumentController)


router.post("/upload", upload.single("image"), (req,res)=>{  
  console.log(req.body);  
  console.log(req.file); 
return   res.json({msg:"upload successful"})
});

export default router;
