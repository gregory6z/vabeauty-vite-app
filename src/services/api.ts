import axios from "axios";

export const api = axios.create({
  baseURL: "https://va-beauty-server.herokuapp.com/",
});


