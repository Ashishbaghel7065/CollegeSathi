import mongoose from "mongoose";

const universitySchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true,
    },
    rank:{
        type:String,
        required:true
    },
    fees:{
        type:String,
        required:true
    },
    courses:{
        type:String,
        required:true,
    },
    facilities:{
            type:String,
        required:true,
    },
    alumni:{
        type:String,
        required:true,
    }

},{timestamps:true})


const University = mongoose.model("university",universitySchema);

export default University;