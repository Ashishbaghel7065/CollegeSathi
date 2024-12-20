import express from "express";
import multer from "multer";
import path from "path";

const createFileUploadMiddleware = (uploadDir) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, uploadDir); // Use the provided upload directory
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
    },
  });

  return multer({ storage: storage });
};

const createUploadRoute = (app, routePath, uploadMiddleware) => {
  app.post(routePath, uploadMiddleware.single("image"), (req, res) => {
    console.log("Body:", req.body);
    console.log("File:", req.file);
    return res.json({ msg: "Upload successful", file: req.file });
  });
};

const app = express();
app.use(express.urlencoded({ extended: false }));

// Reusable configuration
const uploadDir = path.join(__dirname, "../uploads"); // Directory for uploads
const uploadMiddleware = createFileUploadMiddleware(uploadDir);
const uploadRoutePath = "/upload"; // API route path

// Register the upload route
createUploadRoute(app, uploadRoutePath, uploadMiddleware);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT: ${PORT}`);
});
