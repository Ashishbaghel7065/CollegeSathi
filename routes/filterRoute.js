import express from "express";
import { filterByFieldController } from "../controllers/filterController.js";

const router = express.Router();

router.post("/university/filter",filterByFieldController);

export default router;