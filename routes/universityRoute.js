import express from "express";
import {
  createAllUniversityController,
  deleteDocumentController,
  getAllDataController,
  updateAllDataController,
} from "../controllers/collegeDuniaController.js";
import Auth from "../middlewares/authMiddleWare.js";
import adminAuth from "../middlewares/adminAuth.js";




import upload from "../utils/multer.js";
import uploadOnCloudinary from "../utils/cloudinary.js";


const router = express.Router();
router.post("/university/create",Auth,adminAuth, createAllUniversityController);

router.patch("/university/update/:id",Auth,adminAuth, updateAllDataController);


router.get("/university/getdata", getAllDataController);
router.delete("/university/delete/:id",Auth,adminAuth,deleteDocumentController)


router.post("/upload", upload.single("image"), (req,res)=>{  
  uploadOnCloudinary(req.file.path,function(err,result){
    if(err){
      console.log(err);
      return res.status(500).json({
        success:false,
        message : "error uploaded in cloudinary"
      })
      
    }

    res.status(200).json({
      success:true,
      message:"uploaded",
      data:result
    })
  })
  console.log(req.body);  
  console.log(req.file); 
return   res.json({msg:"upload successful"})
});

export default router;
