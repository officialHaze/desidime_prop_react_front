import { axiosInstance } from "./axiosConfig";

export default async function logout() {
  try {
    const { data } = await axiosInstance.get("/logout");
    return data;
  } catch (err) {
    throw err;
  }
}
