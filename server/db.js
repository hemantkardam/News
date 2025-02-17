import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect("");
    console.log("Connected");
  } catch (error) {
    // console.log(error);j
  }
};

export default dbConnect;
