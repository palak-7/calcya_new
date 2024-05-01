"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import {
  getSubHeading,
  addSubHeading,
  deleteSubHeading,
  updateSubHeading,
} from "../../../../../services/articles";
import { Input } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import JoditEditor from "jodit-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SubHeading = ({ article_id, heading_id }) => {
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [headings, setHeadings] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });

  //calculate reading time
  const averageReadingSpeed = 200;
  function countWords(text) {
    const wordCount = text.trim().split(/\s+/).length;
    return wordCount;
  }
  function calculateReadingTime(text) {
    const words = countWords(text);
    const readingTimeMinutes = words / averageReadingSpeed;
    const readingTimeRounded = Math.ceil(readingTimeMinutes); // Round up to the nearest whole number
    return readingTimeRounded;
  }

  const fetchSubHeadings = async () => {
    const response = await getSubHeading(heading_id);
    setHeadings(response.data.result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reading_time = calculateReadingTime(value);
    const response = await addSubHeading({
      article_id,
      heading_id,
      formData,
      value,
      startDate,
      reading_time,
    });
    if (response.data.status) {
      toast.success(response.data.message, {
        position: "bottom-left",
      });
      fetchSubHeadings();
    } else {
      toast.error(response.data.message, {
        position: "bottom-left",
      });
    }
  };
  useEffect(() => {
    fetchSubHeadings();
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  async function deleteA(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteSubHeading(id);
          const newHeadings = headings.filter((item) => item.id != id);
          setHeadings(newHeadings);
          Swal.fire({
            title: "Deleted!",
            text: "Article has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Error in Deleting Article",
            icon: "error",
          });
        }
      }
    });
  }
  const editor = useRef(null);
  const handleClick = (title, content) => {
    setFormData({ title: title });
    setValue(content);
  };
  const config = useMemo(
    () => ({
      readonly: false,
      controls: {
        fontsize: {
          list: [8, 9, 10],
        },
      },
    }),

    []
  );
  const handleUpdate = async () => {
    console.log("hello");
    const response = await updateSubHeading({ id, content });
    if (response.data.status) {
      toast.success(response.data.message, {
        position: "bottom-left",
      });
      fetchSubHeadings();
    } else {
      toast.error(response.data.message, {
        position: "bottom-left",
      });
    }
  };
  return (
    <div className="mt-[150px]">
      <div className="grid grid-cols-12 bg-white rounded-md m-9 p-9">
        <div className="lg:col-start-2 lg:col-span-10 col-span-12">
          <form onSubmit={handleSubmit}>
            <Input
              name="title"
              placeholder="Add a Topic of the article"
              className="rounded-lg mb-4"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <div className="mt-4">
              <JoditEditor
                name="content"
                ref={editor}
                value={value}
                onChange={(newContent) => setValue(newContent)}
                config={config}
              />
            </div>
            <div className="border my-5 p-3 w-1/3">
              <h1 className="text-lg font-semibold">Select Date</h1>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="my-5 py-3 w-1/3">
              <h1 className="text-lg font-semibold">Author</h1>
              <input
                name="author"
                type="text"
                className="border rounded-lg"
                value={formData.author}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-primary p-2 mt-4 text-white rounded-lg"
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4 grid gap-x-2 gap-y-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
        {/* headings */}
        {headings?.map((item) => (
          <>
            <div
              key={item.id}
              className="border-primary border-4 transform transition duration-300 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4"
            >
              <button
                onClick={() => {
                  deleteA(item.id);
                }}
              >
                <MdCancel className="float-right hover:scale-150" />
              </button>
              {/* <button
                onClick={() => {
                  handleUpdate(item.id);
                }}
              >
                <FaPencil className="float-right hover:scale-150" />
              </button> */}
              <div
                className="wow fadeInUp hover:cursor-pointer"
                data-wow-delay=".15s"
                onClick={() => {
                  console.log(item);
                  handleClick(item.name, item.content);
                }}
              >
                <h3 className="font-semibold text-black text-2xl mx-auto text-center items-center">
                  {item.name}
                </h3>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SubHeading;
