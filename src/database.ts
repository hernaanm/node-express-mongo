import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ts-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(">>Database connected<<");
  } catch (error) {
    console.log("Cannot connect to DB ");
  }
}
