import nodemailer from "nodemailer";

// Reusable function to send emails
const sendEmail = async ({ sendTo, subject, html, text }) => {
  try {
    // Create a transporter object using SMTP for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: "ashishkumar440385@gmail.com", 
        pass: "dkjjvgrudjybjmqo", 
      },
    });

    // Define the email options
    const mailOptions = {
      from: "ashishkumar440385@gmail.com",
      to: sendTo, 
      subject: subject,
      text: text, 
      html: html,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully: %s", info.messageId);
    return {
      success: true,
      message: "Email sent successfully!",
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Error sending email:", error.message);
    return {
      success: false,
      message: "Failed to send email.",
      error: error.message,
    };
  }
};

export default sendEmail;
