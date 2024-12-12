import {  getAllCards, handlerCreateNewUser, updateAllCards } from "../services/collegeDuniaService.js";


const getAllDataController=(req,res)=>{
    getAllCards(req,res);
}

const updateAllDataController=(req,res)=>{
    updateAllCards(req,res);
}

const createAllController=(req,res)=>{
    handlerCreateNewUser(req,res)
}

export {getAllDataController,updateAllDataController,createAllController}