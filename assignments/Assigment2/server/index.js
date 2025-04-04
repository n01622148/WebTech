import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

//import routers
import recipeRouter from "./routes/recipe_router.js";

//Initialize app
const app = express();
const PORT = process.env.PORT || 8001;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/", recipeRouter);

// 404 page (API not found)
app.use((req, res) => {
    res.status(404).json({ message: 'API route not found' });
  });


// Database connection?
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.error("MongoDB connection error:", error));
