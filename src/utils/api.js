import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "6c554a6d71msh94191922f8bd431p12f8dfjsn5e7a7a88497b",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});

export default api;