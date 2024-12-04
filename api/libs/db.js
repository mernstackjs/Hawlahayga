import mongoose from "mongoose";

export const dbConnected = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log(`db is connected successfully`);
  } catch (error) {
    console.log(error.message);
  }
};
