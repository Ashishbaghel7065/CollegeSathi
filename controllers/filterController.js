import { filterByFieldsService } from "../services/filterFunctionsService.js"



export const filterByFieldController=(req,res)=>{
    filterByFieldsService(req,res);
}