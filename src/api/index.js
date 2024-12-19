import axios from "../axios";

export const getAllData = () => axios.get('api/users?page=2')
