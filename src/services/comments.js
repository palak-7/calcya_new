import { httpAxios } from "../helper/httpHelper";

export async function sendComment(formData) {
  const result = await httpAxios
    .post("/api/comments/send-comment", formData)
    .then((response) => response.data);
  return result;
}

export async function getComments() {
  const result = await httpAxios
    .get("/api/comments/get-comments")
    .then((response) => response.data);
  return result;
}

export async function deleteComment(id) {
  try {
    const result = await httpAxios
      .delete(`/api/comments/delete-comment/${id}`)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function editComment(data) {
  try {
    const result = await httpAxios
      .put("/api/comments/edit-comment", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addReply(data) {
  try {
    const result = await httpAxios
      .put("/api/replies/add-reply", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteReply(data) {
  try {
    const result = await httpAxios
      .put("/api/replies/delete-reply", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
