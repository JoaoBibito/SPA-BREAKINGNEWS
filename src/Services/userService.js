import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://127.0.0.1:3000";

export function signup(data) {
  delete data.coconfirmPassword;
  const body = {
    ...data,
    username: "Text",
    avatar: "123",
    background: "123",
  };

  const response = axios.post(`${baseURL}/user/`, body);

  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/auth/login`, data);

  return response;
}

export async function userLogged() {
  const response = await axios.get(`${baseURL}/user/findUserById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
export function generateUsername(name) {
  const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random * 1000);
  return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}
