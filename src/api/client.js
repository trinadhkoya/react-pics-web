import axios from "axios";

let headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Client-ID qFJGa_plWONeisTbJl2LCZXOQRh8Hv_77VKS6sk3Ae4',
    'Accept-Version': 'v1'
};
const FM = axios.create({
    baseURL: 'https://api.unsplash.com/',
    timeout: 1500,
    headers
});
export default FM;
