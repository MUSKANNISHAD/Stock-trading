import axios from "axios";

const clientServer = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
});

export default clientServer;