import axios from "axios";

const axiosClient = axios.create({ baseURL: process.env.REACT_APP_BASE_URL_API });

export const headers = {
    'X-RapidAPI-Host': process.env.REACT_APP_HOST_API?.toString() || '',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY?.toString() || ''
}

export default axiosClient;
