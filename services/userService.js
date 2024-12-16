import User from "../model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const emailCheck = User.findOne({ email: req.body.email }) !== null;
    if (!emailCheck) {
      return res.status(400).json({ ms: "user already exists" });
    }
    console.log(req.body);
    const body = req.body;

    if (
      !body ||
      !body.email ||
      !body.password ||
      !body.dateofBirth ||
      !body.role||
      !body.phoneNumber||
      !body.fullName||
      !body.gender
    ) {
      return res.status(400).json({
        msg: "some of the fields are still empty",
      });
    }
    const userResult = await User.create({
      fullName:body.fullName,
      phoneNumber:body.phoneNumber,
      gender:body.gender,
      email: body.email,
      password: body.password,
      dateofBirth: body.dateofBirth,
      role:"USER"
    });

    return res.status(201).json({
      msg: "Document created successfully",
      data: userResult,
    });
  } catch (error) {
    console.error("Error creating document:", error);

    return res.status(500).json({
      msg: "An error occurred while creating the document",
      error: error.message,
    });
  }
};


export const updateUser=async(req,res)=>{
  try {
    const { id } = req.params;
    const { fullName,phoneNumber,gender,email,password,dateofBirth,role} = req.body;
    if (!fullName || !phoneNumber|| !gender || !email || !password || !dateofBirth || !role) {
      return res.status(400).json({
        success: false,
        message: "'id' parameter and  field are required.",
      });
    }
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { 
        fullName:fullName,
        phoneNumber: phoneNumber, 
        gender: gender, 
        email: email, 
        password: password, 
        dateofBirth: dateofBirth, 
        role: role 
      },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update user.",
      error: error.message,
    });
  }
}
export const updateAllCards = async (req, res) => {
  
};

// export const updateUser = async (req, res) => {};
