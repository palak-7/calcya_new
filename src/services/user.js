import { httpAxios } from "../helper/httpHelper";
import pool from "../helper/db";
export async function signup(formData) {
  try {
    const result = await httpAxios
      .post("/api/signup", formData)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function login(formData) {
  try {
    const result = await httpAxios
      .post("/api/login", formData)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

//forgot password
export async function forgotPassword(data) {
  const result = await httpAxios
    .post("/api/forgot-password", data)
    .then((response) => response.data);
  return result;
}

export async function currentUser(data) {
  const result = await httpAxios
    .post("/api/currentUser", { data })
    .then((response) => response.data);
  return result;
}

export async function logout() {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return result;
}

export async function resetPasswordToken(token) {
  const result = await httpAxios
    .post("/api/reset-password-token", { token })
    .then((response) => response.data);
  return result;
}

export async function resetPassword(data) {
  const result = await httpAxios
    .post("/api/reset-password", data)
    .then((response) => response.data);
  return result;
}

export async function addEvents(data) {
  const result = await httpAxios
    .post("/api/add-events", data)
    .then((response) => response.data);
  return result;
}

export async function getEvents() {
  const result = await httpAxios
    .get("/api/get-events")
    .then((response) => response.data);
  return result;
}
