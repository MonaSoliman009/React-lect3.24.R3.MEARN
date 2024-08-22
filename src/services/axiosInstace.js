import axios from 'axios'

export const axiosInstance=axios.create({
    baseURL:"https://fakestoreapi.com",
    // headers:{},
    // timeout:5000,
    // params:{api_key:"jkhuuyuy"}
})