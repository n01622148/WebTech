import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

//import routers
import userRouter from "./routes/user_router.js";
import postRouter from "./routes/post_router.js";


const app = express();
const PORT = process.env.PORT || 8000;
 
// middlelware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 

// routes
app.use("/", userRouter);
app.use("/", postRouter);
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
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
