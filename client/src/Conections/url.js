import axios from 'axios';

const url = 'http://localhost:3001';

export const urlRegister = (data) => axios.get(`${url}/users/register`, data);
export const urlLogin = (email, password) => axios.get(`${url}/login?email=${email}&password=${password}`);
export const urlValidate = (user, token) => axios.get(`${url}/validate?user=${user}&token=${token}`);