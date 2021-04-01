import axios from 'axios';
const API = axios.create();

API.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export default {
  getPosts: async () => {
    return API.get("/posts");
  },
  getSinglePost: async (id) => {
    return API.get(`/posts/${id}`);
  },
  viewPostComments: async(id) => {
    return API.get(`/comments?postId=${id}`)
  }
};  