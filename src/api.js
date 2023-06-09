import axios from "axios";

const restApi = axios.create(
    {
        baseURL: "http://localhost:8000/",
        headers: {
            'Content-Type': 'application/json'
        }
    }
)

restApi.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    if (token)
        config.headers.Authorization = `Bearer ${token}`
    return config
},
    error => Promise.reject(error)
)

export default restApi;