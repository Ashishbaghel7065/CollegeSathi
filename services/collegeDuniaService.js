import University from "../model/universitymodel.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

//getAllUniversity service
export const getAllCards = async (req, res) => {
  try {
    const cards = await University.find();
    res.status(200).json({
      message: "All University Card Get Success",
      success: true,
      error: false,
      data: cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch University cards",
      error: error.message,
    });
  }
};

//create service
export async function handlerCreateNewUniversity(req, res) {
  try {
    const titleCheck = University.findOne({ title: req.body.title }) !== null;
    if (!titleCheck) {
      return res.status(400).json({
        message: "University title already exists",
        success: false,
        error: true,
      });
    }
    const body = req.body;

    if (
      !body ||
      !body.title ||
      !body.location ||
      !body.rank ||
      !body.fees ||
      !body.courses ||
      !body.facilities ||
      !body.alumni
    ) {
      return res.status(400).json({
        message:
          "All fields (title, location, rank, fees, courses, facilities, alumni) are required.",
        success: false,
        error: true,
      });
    }
    const imageData=await uploadOnCloudinary(req.file.path, function (err, result) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "error uploaded in cloudinary",
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Image Uploaded Success",
        data:result,
      });
  
  
    });

    const collegeResult = await University.create({
      title: body.title,
      location: body.location,
      rank: body.rank,
      fees: body.fees,
      courses: body.courses,
      facilities: body.facilities,
      alumni: body.alumni,
      image: imageData.secure_url,
    });

    return res.status(201).json({
      message: "University Card created successfully",
      success: true,
      error: false,
      data: collegeResult,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while creating the University Card",
      error: error.message,
    });
  }
}

//update service
export const updateAllCards = async (req, res) => {
  try {
    const { id } = req.params;
    const { fees, title, location, rank, courses, facilities, alumni, image } =
      req.body;
    if (
      !id ||
      !fees ||
      !title ||
      !rank ||
      !courses ||
      !facilities ||
      !alumni ||
      !location
    ) {
      return res.status(400).json({
        success: false,
        message: "Fields Are Missing",
        error: true,
      });
    }
    const imageData=await uploadOnCloudinary(req.file.path, function (err, result) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error uploaded in cloudinary",
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Image uploaded Success",
        data:result,
      });
  
  
    });

    const updatedCard = await University.findOneAndUpdate(
      { _id: id },
      {
        image: imageData.secure_url,
        fees: fees,
        title: title,
        location: location,
        courses: courses,
        rank: rank,
        alumni: alumni,
        facilities: facilities,
      },
      { new: true }
    );

    if (!updatedCard) {
      return res.status(404).json({
        success: false,
        message: "University Data not found.",
        error: true,
      });
    }

    res.status(200).json({
      message: "University Card Update Succefully",
      success: true,
      error: false,
      data: updatedCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update University Card.",
      error: error.message,
    });
  }
};



//delete service
export const deleteDoc = async (req, res) => {
  try {
  const deletedDoc = await University.deleteOne({ _id: req.params.id });

    return res.status(200).json({ 
      message: "University Card Deleteted SuccessFully" + deletedDoc,
      success:true,
      error:false
     });
  } catch (error) {
    return res.status(200).json({ 
      message: "Server Error" ,
      success:true,
      error:error.message
     });
  }
};
