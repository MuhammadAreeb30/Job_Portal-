import mongoose from "mongoose";

const BDConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default BDConnect;
