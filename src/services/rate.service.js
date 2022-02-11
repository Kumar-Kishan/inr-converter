import BaseService from "./base.service";

class RateService extends BaseService {
  constructor() {
    super();
  }

  async fetchRates() {
    return new Promise((resolve, reject) => {
      this.$http
        .get("/")
        .then((response) => {
          resolve(response.data);
        })
        .catch(reject);
    });
  }
}

export default new RateService();
