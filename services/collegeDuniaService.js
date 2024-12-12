

import University from "../model/universitymodel";

 export const getAllCards = async (req, res) => {
    try {
      const cards = await University.find();
      res.status(200).json({
        success: true,
        data: cards,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch cards",
        error: error.message,
      });
    }
  };



 export const updateAllCards = async (req, res) => {
    try {
      const cards = await University.updateMany();
      res.status(200).json({
        success: true,
        data: cards,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch cards",
        error: error.message,
      });
    }
  };
  async function handlerCreateNewUser(req,res){
    const body=res.body;
    if(
        !body||
        !body.title||
        !body.location||
        !body.rank||
        !body.fees||
        !body.courses||
        !body.facilities||
        !body.alumni
    )
    {
        return res.status(400).json({msg:"Some of your  fields doesnot not exist"})
    }
    else{
    
    }
  }
  export const createAllData= async(req,res)=>{
    const status=handlerCreateNewUser(req,res)
    
    if(status>=400){
        console.log("add body ")
    }
    else{
       const collegeResult= await University.create({
           title:res.body.title,
           location:body.location,
           rank:body.rank,
           fees:body.fees,
           courses:body.courses,
           facilities:body.facilities,
           alumini:body.alumni,
       })
       res.status(201).json({msg:"document created"+collegeResult})
    }

  }
