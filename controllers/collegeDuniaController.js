import {  getAllCards, handlerCreateNewUniversity, updateAllCards,deleteDoc } from "../services/collegeDuniaService.js";


const getAllDataController=(req,res)=>{
    getAllCards(req,res);
}

const updateAllDataController=(req,res)=>{
    updateAllCards(req,res);
}

const createAllUniversityController=(req,res)=>{
    handlerCreateNewUniversity(req,res)
}

const deleteDocumentController=(req,res)=>{
    deleteDoc(req,res);
}

export {getAllDataController,updateAllDataController,createAllUniversityController,deleteDocumentController}