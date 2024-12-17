import User from "../model/userModel.js";

const adminAuth = async (req, res, next) => {
    try {
        const userId = req.user.userId;

    
        const existUser = await User.findById(userId);

        if (!existUser) {
            return res.status(404).json({
                msg: "User not found",
                success: false,
                error: true,
            });
        }

        // Check if the user's role is "Admin"
        if (existUser.role !== "ADMIN") {
            return res.status(403).json({
                msg: "Access Denied: Admins Only",
                success: false,
                error: true,
            });
        }

        // Allow access to the route if the user is Admin
        next();
    } catch (error) {
        console.error("Error in adminAuth middleware:", error);
        return res.status(500).json({
            msg: "Server Error",
            success: false,
            error: true,
        });
    }
};

export default adminAuth;
