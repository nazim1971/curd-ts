import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`My server is running on port ${PORT} `);
})