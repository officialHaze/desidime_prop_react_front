import { axiosInstance } from "./axiosConfig";

interface Params {
  username: string;
  email: string;
  password: string;
}

export default async function createUser({
  username,
  email,
  password,
}: Params) {
  try {
    const { data } = await axiosInstance.post("/createUser", {
      username: username,
      email: email,
      password: password,
    });
    return data;
  } catch (err) {
    throw err;
  }
}
