// Kêt nối database
import mongoose from "mongoose";
export const connect = async ():Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect Success!");
  } catch (error) {
    console.log(error);
    console.log("Connect error!");
  }
};
