import axios from 'axios';
// Retrieve the api_token from local storage
const apiToken = localStorage.getItem('api_token');

const axiosInstance = axios.create({
  
  baseURL: 'http://127.0.0.1:8000/api', // Replace with your API base URL
  headers: {
    Authorization: `Bearer ${apiToken}`, // Include the api_token in the Authorization header
    'Content-Type': 'application/json', // Set the content type if needed
  },
});

export const userImageBASE_URL = 'http://127.0.0.1:8000/';
export const baseURL= 'http://127.0.0.1:8000/api';
export default axiosInstance;
