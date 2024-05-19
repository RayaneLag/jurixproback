import express from "express";
import {
  updateProfile,
  updatePassword,
} from "../controllers/settingsController.js";

const router = express.Router();

router.post("/updateProfile", updateProfile);
router.post("/updatePassword", updatePassword);

export default router;
