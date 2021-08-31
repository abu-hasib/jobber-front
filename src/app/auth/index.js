import Axios from "axios";

export const logUserIn = async (email, password) => {
  //   console.log(password);
  return await Axios.post("http://localhost:8000/users/login", {
    email: email,
    password: password,
  })
    .then((response) => response)
    .catch((error) => error.response);
};

export const signUserUp = async (email, password, confirmPassword) => {
  //   console.log(password);
  return await Axios.post("http://localhost:8000/users/signup", {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  })
    .then((response) => response)
    .catch((error) => error.response);
};

export const getAllUsers = async () => {
  await Axios.get("http://localhost:8000/users").then((response) =>
    console.log(response)
  );
};
