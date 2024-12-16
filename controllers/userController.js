import { createUser } from "../services/userService.js";



export const createUserController=(req,res)=>{
   createUser(req,res);
}
