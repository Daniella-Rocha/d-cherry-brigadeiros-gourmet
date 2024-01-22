import axios from 'axios';

export const getData = axios.create({
  baseURL: 'https://d-cherry.wiremockapi.cloud/',
  headers: {
    "Content-Type": "application/json"
  }
});
