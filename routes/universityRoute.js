import express from "express";
import {
  createAllController,
  getAllDataController,
  updateAllDataController,
} from "../controllers/collegeDuniaController.js";

const router = express.Router();


router.post("/university/create", createAllController);

router.patch("/university/update/:id", updateAllDataController);


router.get("/university/getdata", getAllDataController);

export default router;
