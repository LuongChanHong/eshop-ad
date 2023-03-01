import { productService } from "../Services/ProductService";
export const getAllProduct = async () => {
  try {
    const result = await productService.getAllProduct();
    // console.log("result:", result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetail = async (id) => {
  try {
    const result = await productService.getProductDetail(id);
    // console.log("result:", result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
