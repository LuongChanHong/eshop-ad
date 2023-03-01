import { baseService } from "./baseService";

export class OrderService extends baseService {
  constructor() {
    super();
  }
  createOrder = (data) => {
    return this.post("/order/create", data);
  };
  getAllOrder = (id) => {
    return this.get(`/order/get-all-order?userId=${id}`);
  };
  getOrderById = (id) => {
    return this.get(`/order/get-order-by-id?id=${id}`);
  };
}

export const orderService = new OrderService();
