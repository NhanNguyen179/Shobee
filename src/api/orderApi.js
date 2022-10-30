import orderConfig from "./orderConfig";

const orderApi = {
  async getProvinces() {
    return await orderConfig.get("provinces/");
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
