import mongoose from 'mongoose';


const  productSchema = new mongoose.schema(
    {
        description: {
            require: true,
            type: String,            
        },
        name: {
           require: true,
           type: String,  
        },
        productImage: {
            type: String,            
        },
        price: {
           type: Number,
           default: 0,
        },
        stock: {
            default: 0,
            type: Number,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    {timestamp: true }
);

export const Product = mongoose.model('Product', productSchema);