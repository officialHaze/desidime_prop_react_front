import { useState, useEffect } from "react";
import { axiosInstance } from "./axiosConfig";

export const useKeepConnectionAlive = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      axiosInstance
        .get("/connectionStream")
        .then((res) => {
          const { data } = res;
          console.log(data);
          setCounter((prevCount) => {
            return (prevCount += 1);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }, 9000);
  }, [counter]);
};
