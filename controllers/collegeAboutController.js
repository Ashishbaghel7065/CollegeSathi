import {handlerCreateNewUniversityAbout,getAllUniversityAbout} from "../services/universityAbout.js"

const createAllUniversityAboutController=(req,res)=>{
   
    handlerCreateNewUniversityAbout(req,res)
}

const getAllAbout=(req,res)=>{
    getAllUniversityAbout(req,res);
}


export{createAllUniversityAboutController,getAllAbout};