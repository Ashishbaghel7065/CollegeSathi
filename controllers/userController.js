import { createUser } from "../services/userService.js";



export const createUserController = (req, res) => {
  createUser(req, res);
};

export const UserloginCotroller = (req, res) => {
  userLogin(req, res);
};



export const updateUserController=(req,res)=>{
    updateUser(req,res);
}