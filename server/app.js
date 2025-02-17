import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db.js";
const app = express();
dbConnect();

dotenv.config();
app.listen(3000, () => {
  console.log(`Server is running on the port ${process.env.PORT}`);
});
// console.log("Heloo");
