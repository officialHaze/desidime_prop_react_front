import { axiosInstance } from "./axiosConfig";

export default async function authenticate() {
  try {
    const { data } = await axiosInstance.get("/authenticate");
    return data;
  } catch (err) {
    throw err;
  }
}
