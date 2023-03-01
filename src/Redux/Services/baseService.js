import Axios from "axios";
import { serverPath } from "../path";
export class baseService {
  get = (url) => {
    return Axios({
      url: `${serverPath}${url}`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${serverPath}${url}`,
      method: "POST",
      data: model,
      headers: {
        "content-type": "application/json",
      },
    });
  };

  delete = (url) => {
    return Axios({
      url: `${serverPath}${url}`,
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  };
}
