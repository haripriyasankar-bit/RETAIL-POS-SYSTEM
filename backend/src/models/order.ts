import mongoose, {
  Document,
  Schema
} from "mongoose";

interface IOrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface IOrder
  extends Document {
  userId: string;
  items: IOrderItem[];
  totalAmount: number;
}

const OrderSchema =
  new Schema<IOrder>(
    {
      userId: {
        type: String,
        required: true
      },

      items: [
        {
          productId: String,
          quantity: Number,
          price: Number
        }
      ],

      totalAmount: {
        type: Number,
        required: true
      }
    },
    {
      timestamps: true
    }
  );

export default mongoose.model<IOrder>(
  "Order",
  OrderSchema
);