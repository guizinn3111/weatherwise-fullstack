import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "WeatherWise API is running"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});