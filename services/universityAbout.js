import About from "../model/universityAboutModel.js";



//createUniversityAbout
export async function handlerCreateNewUniversityAbout(req, res) {
  try {
    let body = req.body;
    body.universityByAbout = req.query.universityId;
  
    const requiredFields = [
      "courses",
      "ranking",
      "placement",
      "fees",
      "eligibility",
      "examprocess",
      "placementpartner",
      "certification",
      "universityByAbout",
    ];

    const missingFields = requiredFields.filter((field) => !body?.[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `The following fields are required: ${missingFields.join(", ")}`,
        success: false,
        error: true,
      });
    }

    // Create new document
    const collegeResult = await About.create(body);

    return res.status(201).json({
      message: "University About created successfully",
      success: true,
      error: false,
      data: collegeResult,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while creating the University About",
      success: false,
      error: error.message,
    });
  }
}



export const getAllUniversityAbout = async (req, res) => {
  try {
    const cards = await About.find().populate('universityByAbout');
    res.status(200).json({
      message: "All University About Get Success",
      success: true,
      error: false,
      data: cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch  University About",
      error: error.message,
    });
  }
};