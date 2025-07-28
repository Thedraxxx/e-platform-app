import axios from "axios";

const API = axios.create({
    baseURL: "http://192.168.137.1:8000/api/v2/",
    headers:{
          "Content-Type": "application/json",
        "Accept": "application/json"
    }
});
export default API