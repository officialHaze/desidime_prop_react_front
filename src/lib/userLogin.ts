import { axiosInstance } from "./axiosConfig";

export default async function userLogin(username: string, password: string) {
  try {
    const { data } = await axiosInstance.post("/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (err) {
    throw err;
  }
}
