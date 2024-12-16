import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const Auth = async (req, res, next) => {
  try {

    const header = req.headers.authorization;

    // Check if the header exists and starts with "Bearer "
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "No token provided. Unauthorized." });
    }

    // Extract the token (after "Bearer ")
    const token = header.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Attach decoded payload to the request object for further use
    req.user = decoded;

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ msg: "Invalid or expired token." });
  }
};

export default Auth;
