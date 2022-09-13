import mongoose, { mongo, Schema } from "mongoose";

const CarModel = new Schema(
  {
    brand: String,
    model: String,
    version: String,
    year: Number,
    mileage: Number,
    exchangeType: String,
    salePrice: Number,
  },
  { timestamps: true }
);
   
export default mongoose.model('model', CarModel);
