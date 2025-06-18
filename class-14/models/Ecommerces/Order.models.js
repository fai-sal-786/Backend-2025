import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true,
        },
        customer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
        orderItems: {
            type: [orderItemSchema],
        },
        address: {
            type: String,
            required:  true,
        },
        Status: {
            type: String,
            enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
            default: 'PENDING',
        },
    },
    {timestamp: true}
);

export const Order = mongoose.model('Order', orderSchema);