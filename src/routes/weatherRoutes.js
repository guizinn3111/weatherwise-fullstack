import express from "express";
import { getWeatherAdvice } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/advice", getWeatherAdvice);

export default router;