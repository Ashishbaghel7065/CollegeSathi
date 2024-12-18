import { createUser, forgetPassword, updatePasswordService, updateUserService, userLogin } from "../services/userService.js";


         //this controller create new user doc
export const createUserController = (req, res) => {
  createUser(req, res);
};


         //verfify user controller
export const UserloginCotroller = (req, res) => {
  userLogin(req, res);
};


       //this controller patches any existing doc
export const updateUserController=(req,res)=>{
    updateUserService(req,res);
}

       //this controller redirect to new password change page
export const forgetPasswordController=(req,res)=>{
  forgetPassword(req,res);
}

      //updatePasswordController here
export const updatePasswordController=(req,res)=>{
  updatePasswordService(req,res);
}
  
