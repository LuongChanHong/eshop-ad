/* eslint-disable no-useless-constructor */
import { baseService } from "./baseService";

// Suử dụng như 1 lớp đôi tượng nên cần phải viết hoa tên lớp
export class UserService extends baseService {
  constructor() {
    super();
  }
  signIn = (data) => {
    return this.post("/user/login", data);
  };
  signUp = (data) => {
    return this.post("/user/signup", data);
  };

  getInfo = (id) => {
    return this.get(`/user/info?id=${id}`);
  };
}

export const userService = new UserService();
