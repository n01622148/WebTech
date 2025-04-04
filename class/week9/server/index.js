//imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookrouter from "./router/book_router.js"

//variables
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/book", bookrouter)

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT,() => {
        console.log(`Server is up on http://localhost:${PORT}`)
  });
});
