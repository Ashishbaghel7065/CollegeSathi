import express from "express";
const app =express();
import multer from "multer";




import path from "path";

app.use(express.urlencoded({ extended: false }))


const storage =multer.diskStorage({
    destination: function (req, file, cb){    
        return cb(null,"../uploads")        
    },    
    filename: function (req, file, cb){         
    return cb(null,`${Date.now()}-${file.originalname}`)
                        
    }

})

const upload = multer({ storage: storage })

app.post("/upload", upload.single("image"), (req,res)=>{  
    console.log(req.body);  
    console.log(req.file); 
  return   res.json({msg:"upload successful"})
    

   
   
});

app.listen(8000,()=>{
    console.log(`SERVER STARTED AT PORT : 8000`);
    
})
