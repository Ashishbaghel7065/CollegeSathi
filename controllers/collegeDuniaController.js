import {  getAllCards, handlerCreateNewUser, updateAllCards } from "../services/collegeDuniaService.js";


const getAllDataController=(req,res)=>{
    getAllCards();
}

const updateAllDataController=(req,res)=>{
    updateAllCards();
}

const createAllController=(req,res)=>{
    handlerCreateNewUser(req,res)
}

export {getAllDataController,updateAllDataController,createAllController}