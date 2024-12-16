


import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName:{
      type:String,
      required:true,
      
    },
    phoneNumber:{
      type:Number,
      required:true,
      unique:true,
    },
    gender:{
      type:String,
      required:true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateofBirth:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER"
    },
},
{
    timeStamps:true,
}
);

const User= mongoose.model("user", userSchema);

export default User;
