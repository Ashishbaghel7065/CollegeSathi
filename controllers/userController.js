import { createUser, updateUser } from "../services/userService.js";



export const createUserController=(req,res)=>{
   createUser(req,res);
}

export const updateUserController=(req,res)=>{
    updateUser(req,res);
}