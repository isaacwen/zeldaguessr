import axios from "axios"

const api = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_API_URL,
  baseURL: "http://localhost:8080"
})

export const getGameData = (setGameData) => {
  api.get("/location/random/5")
    .then((response) => {
      setGameData(response.data);
    }).catch((error) => {
      setGameData(null);
    })
}

export default {
  getGameData
}