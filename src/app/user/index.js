import Axios from "axios";

export const postNewJob = async (title, description) => {
  //   console.log(password);
  return await Axios.post("http://localhost:8000/jobs/new", {
    title: title,
    description: description,
  })
    .then((response) => response)
    .catch((error) => error.response);
};

export const getAllJobs = async () => {
  //   console.log(password);
  return await Axios("http://localhost:8000/jobs")
    .then((response) => response)
    .catch((error) => error.response);
};

export const createProfile = async (name, gender) => {
  return await Axios.post("http://localhost:8000/profile/new", {
    name: name,
    gender: gender,
  })
    .then((response) => response)
    .catch((error) => error.response);
};
