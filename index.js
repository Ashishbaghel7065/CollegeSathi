import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import cors from "cors";
import universityRouter from "./routes/universityRoute.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
const corsOptions = {
  origin: ["http://localhost:3000","http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", universityRouter)


app.get("/", (req, res) => {
  res.send({
    message: `Server is running on ${PORT}`,

  });
});

ConnectDB();

app.listen(PORT, () => {
  console.log(`Server is Running on port : ${PORT}`);
});
