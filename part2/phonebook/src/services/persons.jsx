import axios from "axios";

const baseURL = "/api/persons";

const getAll = () => {
  return axios
    .get(baseURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error.response.data);
      throw error.response.data;
    });
};

const create = (newObject) => {
  return axios
    .post(baseURL, newObject)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error creating data:", error.response.data);
      throw error.response.data;
    });
};

const update = (id, newObject) => {
  return axios
    .put(`${baseURL}/${id}`, newObject)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating data:", error.response.data);
      throw error.response.data;
    });
};

const deletePersons = (id) => {
  return axios
    .delete(`${baseURL}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error deleting data:", error.response.data);
      throw error.response.data;
    });
};

const changeNumberPut = (id, newNumber) => {
  return axios
    .put(`${baseURL}/${id}`, newNumber)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error changing number:", error.response.data);
      throw error.response.data;
    });
};

export default { getAll, create, update, deletePersons, changeNumberPut };
