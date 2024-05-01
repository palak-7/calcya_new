import { httpAxios } from "../helper/httpHelper";

//-----------------
//article
//-----------------
export async function addArticle(formData) {
  try {
    const result = await httpAxios
      .post("/api/add-articles", formData)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getArticle(formData) {
  try {
    const result = await httpAxios
      .get("/api/get-articles", formData)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteArticle(id) {
  try {
    const result = await httpAxios
      .delete(`/api/delete-articles/${id}`)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

//--------------
//headings
//--------------
export async function getHeading(id) {
  try {
    const result = await httpAxios
      .get(`/api/headings/get-heading/${id}`)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addHeading(formData) {
  try {
    const result = await httpAxios
      .post("/api/headings/add-heading", formData)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteHeading(id) {
  try {
    const result = await httpAxios
      .delete(`/api/headings/delete-heading/${id}`)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

//---------------------
//subheadings
//---------------------
export async function getSubHeading(id) {
  try {
    const result = await httpAxios
      .get(`/api/sub-heading/get-subheadings/${id}`)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

//get one subheading
export async function oneSubHeading(id) {
  try {
    const result = await httpAxios
      .get(`/api/sub-heading/get-one-subheading/${id}`)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

//get all subheadings
export async function getAllSubHeadings() {
  try {
    const result = await httpAxios
      .get(`/api/sub-heading/get-subheadings`)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addSubHeading(data) {
  try {
    const result = await httpAxios
      .post("/api/sub-heading/add-subheading", data)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteSubHeading(id) {
  try {
    const result = await httpAxios
      .delete(`/api/sub-heading/delete-subheading/${id}`)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateSubHeading(data) {
  console.log(data);
  try {
    const result = await httpAxios
      .put("/api/sub-heading/update-subheading", data)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
