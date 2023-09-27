import axios from "axios"

const fplInstance = axios.create({
  baseURL: "http://localhost:5172",
})

export { fplInstance }
