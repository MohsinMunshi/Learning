import axios from "axios";

const API = axios.create({baseURL:'http://localhost/backend/api/'})

export const login = async (data) => {
    return await API.post(`login`,data)
}

export const resellers = async () => {
    return await API.get(`resellers`)
}
