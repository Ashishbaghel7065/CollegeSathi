import express from "express";
import {
  createAllController,
  getAllDataController,
  updateAllDataController,
} from "../controllers/collegeDuniaController.js";
import { handlerCreateNewUser } from "../services/collegeDuniaService.js";

const router = express.Router();

// Create a new university
router.post("/university/create", handlerCreateNewUser);

// // Update an existing university by ID
// router.put("/university/", updateAllDataController);

// // Get all universities
// router.get("/university", getAllDataController);

export default router;
