import { createAllData, getAllCards, updateAllCards } from "../services/collegeDuniaService";


getAllDataController=()=>{
    getAllCards();
}

updateAllDataController=()=>{
    updateAllCards();
}

createAllController=()=>{
    createAllData();
}

export {getAllDataController,updateAllDataController,createAllController}