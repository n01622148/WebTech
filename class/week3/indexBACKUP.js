//const express = require("express")
import express from "express"; //in package.json add  "type": "module", below "main":
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
     console.log(`http://localhost:${PORT}`)
})