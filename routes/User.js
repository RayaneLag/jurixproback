import express from "express";
import { CreateUser, Login } from "../controllers/User.js";

const router = express.Router();

router.post("/login", Login);

router.post("/signUp", CreateUser);

export default router;
