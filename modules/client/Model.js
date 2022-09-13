import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  lastName: String,
  phone: String,
  streetName: String,
  apartment: String,
  town: String,
  usState: String,
  zip: String,
});

export default mongoose.model("Client", userSchema);