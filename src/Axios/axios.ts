import axios from "axios";

// Set config defaults when creating the instance
export const instance = axios.create({
  baseURL: 'https://api.example.com',
});
