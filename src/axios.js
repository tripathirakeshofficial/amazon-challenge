import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-c679c/us-central1/api", //the api url (cloud function)
});

export default instance;
