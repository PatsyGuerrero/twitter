import axios from 'axios';

const url = 'http://localhost:3001';

export const urlRegister = (data) => axios.post(`${url}/register `, data );
export const urlLogin = (email, password) => axios.get(`${url}/login?email=${email}&password=${password}`);
export const urlValidate = (user, token) => axios.get(`${url}/validate?user=${user}&token=${token}`);
export const urlCreateTweet = (data) => axios.post(`${url}/create`, data);
export const urlGetTweets = () => axios.get(`${url}/tweets`);