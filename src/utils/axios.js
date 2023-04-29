import axios from "axios";

const baseURL = 'https://engagement-service.onrender.com/v1'

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})