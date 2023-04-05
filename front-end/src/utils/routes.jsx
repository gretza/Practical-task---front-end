export const routes = {
  loginPage: "/",
  registerPage: "/register",
  homePage: "/home",
};

export const API_URL = process.env.REACT_APP_API_URL;
export const REGISTER = `${API_URL}/api/register`;
export const LOGIN = `${API_URL}/api/login`;
export const HOME = `${API_URL}/api/home`;
