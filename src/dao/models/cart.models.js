import mongoose from "mongoose";

const cartCollection = "cart";

const cartSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: String,
                ref: "products",
            },
            quantity: Number,
        },
    ],
});

cartSchema.pre("find", function () {
    this.populate("products.product");
});

export const cartModel = mongoose.model(cartCollection, cartSchema);
