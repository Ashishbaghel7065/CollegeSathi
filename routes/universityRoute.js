import express from "express"
import { createAllController, getAllDataController, updateAllDataController } from "../controllers/collegeDuniaController.js"

const router = express.Router()


router.post("/university/create",createAllController)
router.post("/university/update",updateAllDataController)
router.get("/university/getall",getAllDataController)
// router.put("/university/create/:id",)


export default router;
