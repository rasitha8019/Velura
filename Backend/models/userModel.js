import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, //unique makes to use single email
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
); //minimize  is used because cartdata is empty by default mongoose do not consider it if we use minimum it consider it

const userModel = mongoose.model.user || mongoose.model("user", userSchema);
export default userModel;
