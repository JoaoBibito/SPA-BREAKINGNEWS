import axios from "axios"

const baseURL = "http://127.0.0.1:3000"

export function gettAllNews(){
  const response = axios.get(`${baseURL}/news/`);
  return response
}