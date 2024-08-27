import axios from "axios";

export function login(user){

console.log(JSON.stringify(user));

   return  axios.post("https://fakestoreapi.com/auth/login",user)
}