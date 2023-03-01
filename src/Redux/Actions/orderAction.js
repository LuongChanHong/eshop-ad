import { orderService } from "../Services/OrderService";

export const createOrder = async (data) => {
  try {
    await orderService.createOrder(data);
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrder = async (userId) => {
  try {
    const result = await orderService.getAllOrder(userId);
    // console.log("result:", result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderById = async (id) => {
  try {
    const result = await orderService.getOrderById(id);
    // console.log("result:", result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
