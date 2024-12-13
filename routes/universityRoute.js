import express from "express";
import {
  createAllUniversityController,
  deleteDocumentController,
  getAllDataController,
  updateAllDataController,
} from "../controllers/collegeDuniaController.js";

const router = express.Router();


router.post("/university/create", createAllUniversityController);

router.patch("/university/update/:id", updateAllDataController);


router.get("/university/getdata", getAllDataController);
router.delete("/university/delete/:id",deleteDocumentController)

export default router;
