import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import cors from "cors";
import universityRouter from "./routes/universityRoute.js";
import userRouter from './routes/userRoute.js'
import filterRouter from './routes/filterRoute.js'

import universtyAboutRouter from "./routes/universityAboutRoute.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
const corsOptions = {
  origin: ["http://localhost:3000","http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE","PATCH"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", universityRouter);
app.use("/api",userRouter);
app.use("/api",filterRouter);
app.use("/api",universtyAboutRouter);


app.get("/", (req, res) => {
  res.send({
    message: `Server is running on ${PORT}`,

  });
});

ConnectDB();

app.listen(PORT, () => {
  console.log(`Server is Running on port : ${PORT}`);
});
