import mongoose from "mongoose";
import { MONGODB_NAME } from "../constants/constants.js";

export const connectDB = (async () => {

  try {

    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${MONGODB_NAME}`);
    console.log(`MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);

  } catch (error) {
    console.log(`MIONGO DB conncetion error: `, error);
    process.exit(1);
  }

})



