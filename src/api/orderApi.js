import orderConfig from "./orderConfig";

const orderApi = {
  async getProvinces() {
    return await orderConfig.get("provinces/");
  },
  async getReviewByProductId() {
    let temp = "8dcc9380-95ed-4ec2-a43f-9e3eeae7d612";
    return await orderConfig.get(`/sv3/reviews?product=${temp}`);
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
