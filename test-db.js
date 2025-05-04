// test-db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_NAME = "utube";

const connectDB = async () => {
  try {
    console.log(">>> Attempting connection...");
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(">>> Connected to MongoDB:", conn.connection.host);
  } catch (error) {
    console.error(">>> Connection failed:", error.message);
  }
};

connectDB();
