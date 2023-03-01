import { baseService } from "./baseService";

export class ProductService extends baseService {
  constructor() {
    super();
  }
  getAllProduct = () => {
    return this.get("/product/getAllProducts");
  };
  getProductDetail = (id) => {
    return this.get(`/product/getProductDetail?id=${id}`);
  };
}

export const productService = new ProductService();
