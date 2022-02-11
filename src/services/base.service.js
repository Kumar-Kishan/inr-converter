import axios from "axios";

class BaseService {
  constructor() {
    this.$http = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }); // axios.create
  } // constructor
} // class BaseService

export default BaseService;
