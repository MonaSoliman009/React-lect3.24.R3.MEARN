import axios from 'axios'
import { store } from '../store/store';
import { changeLoader } from '../store/slices/loader';

export const axiosInstance=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/",
    // headers:{},
    // timeout:5000,
    // params:{api_key:"jkhuuyuy"}
})

//request interceptor
axiosInstance.interceptors.request.use((req)=>{
  
    console.log("req",req);

    store.dispatch(changeLoader(true))

    // if(req.url.startsWith('/posts')&& req.method=="POST"){

    //     req.headers.Authorization ="dkfjihiudgh"
    // }


    return req
    
},(err)=>{
 
    console.log(err);


    return Promise.reject(err)
    

})


//response interceptor

axiosInstance.interceptors.response.use((res)=>{


    store.dispatch(changeLoader(false))

    return res
},(err)=>{


    return Promise.reject(err)
})