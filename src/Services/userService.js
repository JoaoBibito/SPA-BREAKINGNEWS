import axios from "axios";

const baseURL = "http://127.0.0.1:3000";

export function signup(data) {
  delete data.coconfirmPassword;
  const body = {
    ...data,
    username: "Text",
    avatar: "123",
    background: "123",
  };
  console.log("data", body);
  const response = axios.post(`${baseURL}/user/`, body);

  return response;
}
