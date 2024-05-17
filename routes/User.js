import express from "express";
import { Login, CreateUser } from "../controllers/user.js";

const router = express.Router();

router.post("/login", Login);

router.post("/signUp", CreateUser);

export default router;
