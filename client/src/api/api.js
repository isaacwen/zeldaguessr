import axios from "axios"

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL
})

export const getGameData = (setGameData) => {
  api.get("/api/random")
    .then((response) => {
      setGameData(response.data);
    }).catch((_) => {
      setGameData(null);
    })
}

const exportedObj = {
  getGameData
}

export default exportedObj