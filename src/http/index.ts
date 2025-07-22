import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/v2/",
    headers:{
          "Content-Type": "application/json",
        "Accept": "application/json"
    }

});
export default API