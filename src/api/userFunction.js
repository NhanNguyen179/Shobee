import userApi from "./userApi";

const userAPI = {
  async login(data) {
    return await userApi.post("auth/admin/login/", data);
  },
  async register(data,role) {
    return userApi.post(`/user/${role}/register_with_roles/`,data);
  },
  // getUserByUsername(username) {
  //   return userApi.get(`/user/getUserByUsername/${username}`)
  // },
  // follow(userId) {
  //   return userApi.get(`/user/follow/${userId}`)
  // },
  // unfollow(userId) {
  //   return userApi.get(`/user/unfollow/${userId}`)
  // },
  // setAvatarAndDesc(data) {
  //   return userApi.post(`/user/setAvatarAndDesc`, data)
  // },
  // setDesc(desc) {
  //   return userApi.post(`/user/setDesc`, { desc })
  // },
};

export default userAPI;
