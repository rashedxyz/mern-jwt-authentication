import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

app.use((req, _, next) => {
  // logs the hits received by the server
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/user", userRoutes);

const port = parseInt(process.env.PORT, 10) || 8000;

mongoose
  .connect(process.env.MONGO_CONNECT_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("> Connected to MongoDB");
      console.log(`> Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Cannot start the app. Something went wrong. ", err);
  });
