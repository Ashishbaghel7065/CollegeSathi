import User from "../model/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmail from "../mail/mail.js";
import { emailTemplate } from "../config/emailTemplate.js";

//createUserDocService here
export const createUser = async (req, res) => {
  try {
    const emailCheck = User.findOne({ email: req.body.email }) !== null;
    if (!emailCheck) {
      return res.status(400).json({
        message: "user already exists",
        success: false,
        error: true,
      });
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
        message: "some of the fields are still empty",
        success: false,
        error: true,
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
      message: "Document created successfully",
      success: true,
      error: false,
      data: userResult,
    });
  } catch (error) {
    console.error("Error creating document:", error);

    return res.status(500).json({
      message: "An error occurred while creating the document",
      error: error.message,
    });
  }
};

// Userlogin
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email or Password is Missing",
        success: false,
        error: true,
      });
    }

    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res.status(404).json({
        message: "User is not found. Please Signup.",
        success: false,
        error: true,
      });
    }

    const comparePassword = await bcryptjs.compare(
      password,
      existUser.password
    );

    if (!comparePassword) {
      return res.status(401).json({
        message: "Password is incorrect",
        success: false,
        error: true,
      });
    }

    const payload = {
      userId: existUser._id,
      userEmail: existUser.email,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    return res.status(200).json({
      message: "User Login Successful",
      success: true,
      error: false,
      token: token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: true,
    });
  }
};



//updateFieldservice here
export const updateUserService = async (req, res) => {
  try {
    const { id } = req.params;
    const fieldsToUpdate= req.body;
    if (
     fieldsToUpdate
    ) {
      return res.status(400).json({
        success: false,
        message: "'id' parameter and 'fees' field are required.",
      });
    }
    // const hashpassword = await bcryptjs.hash(body.password, 10);
    const updatedUser = await User.updateOne(
      { _id: id },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      message: "User Update Succefully",
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



// Define the forgetPassword function
export const forgetPassword = async (req, res) => {
  try {
    const { email } = req?.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
        success: false,
        error: true,
      });
    }

    // Find the user by email
    const userEmail = await User.findOne({ email });

    if (!userEmail) {
      return res.status(404).json({
        message: "User with this email does not exist",
        success: false,
        error: true,
      });
    }
    const link = "http://localhost:5173/forget-password";
    // Email content
    const subject = "Forget Password";
    const htmlContent = emailTemplate(userEmail.fullName, link, userEmail._id);
    const textContent = "Click the link below to reset your password";

    // Call the sendEmail function
    const data = await sendEmail({
      sendTo: email,
      subject,
      html: htmlContent,
      text: textContent,
    });

    console.log("Password reset email sent successfully.");
    return res.status(200).json({
      message: "Password reset email sent successfully.",
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
    return res.status(500).json({
      message: "Internal server error. Please try again later.",
      success: false,
      error: true,
    });
  }
};




//updatePasswordservice here
export const updatePasswordService = async (req, res) => {
  const { id } = req.params;
  const { confirmPass, updatedPass } = req.body;
  if (!confirmPass || !updatedPass) {
    return res.status(400).json({
      message: "Both password fields are required.",
      success: false,
      error: true,
    });
  }
  if (confirmPass !== updatedPass) {
    return res.status(400).json({
      message: "Passwords do not match.",
      success: false,
      error: true,
    });
  }

  try {
    const newHashedPassword = await bcryptjs.hash(confirmPass, 10);

    const updateResult = await User.updateOne(
      { _id: id },
      { $set: { password: newHashedPassword } }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Password updated successfully.",
      data: updateResult,
    });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({
      message: "An error occurred while updating the password.",
    });
  }
};




// service to get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Get All Success ",
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cards",
      error: error.message,
    });
  }
};
