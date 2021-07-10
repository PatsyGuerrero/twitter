import axios from 'axios';

const url = 'http://localhost:3001';

export const urlRegister = () => axios.get(`${url}/users/register`);
export const urlLogin = () => axios.get(`${url}/users/login`);