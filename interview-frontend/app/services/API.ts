import axios from 'axios';
const API = axios.create();

API.defaults.baseURL = 'https://api-core.jomorder.com.my/api'

export default {
  forgotPassword: async () => {
    return API.get(
      ""
    );
  },
  getBranches: async () => {
    return API.get("/merchant/branches?page=0");
  },
};  