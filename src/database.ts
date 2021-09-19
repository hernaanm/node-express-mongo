import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(">>Database connected<<");
  } catch (error) {
    console.log("Cannot connect to DB ");
  }
}
