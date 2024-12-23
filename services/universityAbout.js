import About from "../model/universityAboutModel.js";



//createUniversityAbout
export async function handlerCreateNewUniversityAbout(req, res) {
  try {
    let body = req.body;
    body.universityByAbout = req.query.universityId;
    
   console.log(body);

 
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
      console.log("Missing fields:", missingFields);

      return res.status(400).json({
        message: `The following fields are required: ${missingFields.join(", ")}`,
        success: false,
        error: true,
      });
    }

    // Create new document
    const collegeResult = await About.create(body);

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
      success: false,
      error: error.message,
    });
  }
}



export const getAllUniversityAbout = async (req, res) => {
  try {
    const cards = await About.find().populate('universityByAbout');
    res.status(200).json({
      message: "All About Get Success",
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