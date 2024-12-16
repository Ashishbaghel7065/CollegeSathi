import User from "../model/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
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
      !body.role ||
      !body.phoneNumber ||
      !body.fullName ||
      !body.gender
    ) {
      return res.status(400).json({
        msg: "some of the fields are still empty",
      });
    }

    const hashpassword = await bcryptjs.hash(body.password, 10);

    const userResult = await User.create({
      fullName: body.fullName,
      phoneNumber: body.phoneNumber,
      gender: body.gender,
      email: body.email,
      password: hashpassword,
      dateofBirth: body.dateofBirth,
      role: "USER",
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

export const updateUserService = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName,phoneNumber,gender,email,password,dateofBirth,role } = req.body;
    if (!fullName || !phoneNumber|| !gender || !email || !password || !dateofBirth || !role ) {
      return res.status(400).json({
        success: false,
        message: "'id' parameter and 'fees' field are required.",
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
        role: role, 
        
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
};

// export const updateUser = async (req, res) => {};
// Userlogin 
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    if (!email || !password) {
      return res.status(400).json({ msg: "Email or Password is Missing" });
    }

    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res.status(404).json({ msg: "User is not found. Please Signup." });
    }

   
    const comparePassword = await bcryptjs.compare(password, existUser.password);

    if (!comparePassword) {
      return res.status(401).json({ msg: "Password is incorrect" });
    }

   
    const payload = {
      userId: existUser._id,
      userEmail: existUser.email,
    };

  
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

  
    return res.status(200).json({
      msg: "User Login Successful",
      token: token,
    });
  } catch (error) {
    
    console.error("Error during login:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
