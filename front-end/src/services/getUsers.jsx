import { HOME } from "../utils/routes";

export const getUsers = (token) => {

  return fetch(HOME, {
    headers: {
      token: token,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Request failed")
      return res.json()
    })
    .then((data) => console.log(data));
};
