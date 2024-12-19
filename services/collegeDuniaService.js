import University from "../model/universitymodel.js";

//getAllUniversity service
export const getAllCards = async (req, res) => {
  try {
    const cards = await University.find();
    res.status(200).json({
      message: "All Card Get Success",
      success: true,
      error: false,
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
      !image ||
      !location
    ) {
      return res.status(400).json({
        success: false,
        message: "'id' parameter and 'fees' field are required.",
        error: true,
      });
    }
    const updatedCard = await University.findOneAndUpdate(
      { _id: id },
      {
        image: image,
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
        message: "University not found.",
        error: true,
      });
    }

    res.status(200).json({
      message: "Card Update Succefully",
      success: true,
      error: false,
      data: updatedCard,
    });
  } catch (error) {
    console.error("Error updating university:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update university.",
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
        message: "title already exists",
        success: false,
        error: true,
      });
    }
    console.log(req.body);
    const body = req.body;

    if (
      !body ||
      !body.title ||
      !body.location ||
      !body.rank ||
      !body.fees ||
      !body.courses ||
      !body.facilities ||
      !body.alumni ||
      !body.image
    ) {
      return res.status(400).json({
        message:
          "All fields (title, location, rank, fees, courses, facilities, alumni) are required.",
        success: false,
        error: true,
      });
    }
    const collegeResult = await University.create({
      title: body.title,
      location: body.location,
      rank: body.rank,
      fees: body.fees,
      courses: body.courses,
      facilities: body.facilities,
      alumni: body.alumni,
      image: body.image,
    });

    return res.status(201).json({
      message: "Document created successfully",
      success: true,
      error: false,
      data: collegeResult,
    });
  } catch (error) {
    console.error("Error creating document:", error);

    return res.status(500).json({
      message: "An error occurred while creating the document",
      error: error.message,
    });
  }
}

//delete service
export const deleteDoc = async (req, res) => {
  try {
  const deletedDoc = await University.deleteOne({ _id: req.params.id });

    return res.status(200).json({ 
      message: "deleteted successFully" + deletedDoc,
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
