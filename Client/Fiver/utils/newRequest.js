import axios from "axios";

const newRequest = axios.create({
   baseURL: "https://clone-fiverr-production.up.railway.app/api/",
   withCredentials: true,
});

export default newRequest;
