import express from 'express';
const app = express();

import * as dotenv from "dotenv";
dotenv.config();
 
import connectDB from "./db/db.js";

const port = process.env.PORT



connectDB()
.then(() => {
  app.listen(port || 4000, () => {
    console.log(`Server is listening on port : ${port}`);
  })
})
.catch((err) => {
  console.log("MongoDB connection failed: ", err);
})

