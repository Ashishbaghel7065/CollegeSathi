import {  getAllCards, handlerCreateNewUser, updateAllCards } from "../services/collegeDuniaService.js";


const getAllDataController=()=>{
    getAllCards();
}

const updateAllDataController=()=>{
    updateAllCards();
}

const createAllController=()=>{
    handlerCreateNewUser()
}

export {getAllDataController,updateAllDataController,createAllController}