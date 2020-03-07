import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://silent-auction-69.herokuapp.com/api" //TEMPORARY
  });
};

export default axiosWithAuth;