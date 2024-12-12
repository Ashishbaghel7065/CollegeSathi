import mongoose from "mongoose";

const ConnectDB = async ()=>{

   try {
    
    await mongoose.connect(process.env.DATABASE_URI)
    console.log("Database Connected SuccesFully")

   } catch (error) {
    console.log(error)
   }

}

export  default ConnectDB;
