import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUri = process.env.MONGODB_URI;

const initializeDb = async () => {
  await mongoose
    .connect(mongoUri)
    .then(() => console.log("Connected to DB"))
    .catch((error) => console.log("Error connecting to db", error));
};

export default initializeDb;
