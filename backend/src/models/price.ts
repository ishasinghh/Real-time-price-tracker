import { Schema, Document, model } from "mongoose";
import moment from "moment-timezone";

export interface IPrice extends Document {
  symbol: string;
  price: number;
  timestamp: Date;
}

const priceSchema = new Schema({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Price = model<IPrice>("Price", priceSchema);
