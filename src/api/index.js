import axios from 'axios';

// url for development:
// const url = 'http://localhost:5000/api/posts';

const url = 'https://memories-mern-bknd.herokuapp.com/api/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
   axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
