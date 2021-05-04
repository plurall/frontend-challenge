import axios from "axios";
import { getToken } from "./token";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {'Authorization': 'Bearer ' + getToken()},
});

export default instance;