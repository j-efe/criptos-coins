import axios from 'axios';

export default axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  timeout: 10000,
  headers: { "Content-type": "application/json" }
});