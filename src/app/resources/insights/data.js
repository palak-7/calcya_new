import { getAllSubHeadings } from "../../../services/articles";
let data = null;
const fetchData = async () => {
  try {
    const response = await getAllSubHeadings();
    if (response.data && response.data.result) {
      data = response.data.result;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};
fetchData();
export { fetchData, data };
