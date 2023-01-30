import { productModel } from "../dao/models/products.models.js";

class productDao {
    async getProducts(limit) {
        if (limit === 0 || !limit) {
            return await productModel.find({});
        } else {
            return await productModel.find({}).limit(limit);
        }
    }

    async getProductById(id) {
        return productModel.findById(id);
    }

    async createProduct(product) {
        return await productModel.create(product);
    }

    async updateProduct(id, product) {
        return await productModel.findByIdAndUpdate(id, product, { new: true });
    }

    async deleteProduct(id) {
        return await productModel.findByIdAndDelete(id);
    }
}

export default new productDao();
