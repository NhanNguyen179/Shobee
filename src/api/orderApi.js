import orderConfig from "./orderConfig";

const orderApi = {
  async getProvinces() {
    return await orderConfig.get("provinces/");
  },
  async getReviewByProductId(productId, rating = 0, limit = 20, page = 1) {
    return await orderConfig.get(
      `/reviews?product=${productId}&rating=${rating}&limit=${limit}&page=${page}`
    );
  },
  async getWard(idProvice) {
    return await orderConfig.get(`wards/${idProvice}`);
  },
  async getDistrict(idWard) {
    return await orderConfig.get(`wards/${idWard}`);
  },
  getUsersByUsername(username) {
    return orderConfig.get(`/user/getUsersByUsername/${username}`);
  },
};

export default orderApi;
