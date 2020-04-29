import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token")); //res.data.token
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://expat-journal-server.herokuapp.com",
  });
};
