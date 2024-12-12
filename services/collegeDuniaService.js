import University from "../model/universitymodel.js";

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
    const { id } = req.params; // Correctly access the route parameter
    const { fees } = req.body;

    // Check if 'id' and 'fees' are provided
    if (!id || !fees) {
      return res.status(400).json({
        success: false,
        message: "'id' parameter and 'fees' field are required.",
      });
    }

    // Update the document and return the updated version
    const updatedCard = await University.findOneAndUpdate(
      { _id: id },
      { fees: fees },
      { new: true } // Ensures the returned document is the updated one
    );

    // Check if the document was found and updated
    if (!updatedCard) {
      return res.status(404).json({
        success: false,
        message: "University not found.",
      });
    }

    res.status(200).json({
      success: true,
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

export async function handlerCreateNewUser(req, res) {
  try {
    console.log(req.body);
    const body = req.body;

    // Validate required fields
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
      return res
        .status(400)
        .json({
          msg: "All fields (title, location, rank, fees, courses, facilities, alumni) are required.",
        });
    }

    // Create a new document in the database
    const collegeResult = await University.create({
      title: body.title,
      location: body.location,
      rank: body.rank,
      fees: body.fees,
      courses: body.courses,
      facilities: body.facilities,
      alumni: body.alumni, // Corrected typo
    });

    // Send success response
    return res.status(201).json({
      msg: "Document created successfully",
      data: collegeResult,
    });
  } catch (error) {
    console.error("Error creating document:", error);

    // Send error response
    return res.status(500).json({
      msg: "An error occurred while creating the document",
      error: error.message,
    });
  }
}
