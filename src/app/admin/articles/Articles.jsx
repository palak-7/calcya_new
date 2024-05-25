"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import UserContext from "../../../context/UserContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import {
  addSubHeading,
  getAllSubHeadings,
  deleteSubHeading,
  updateSubHeading,
} from "../../../services/articles";
import { Input } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import dynamic from "next/dynamic";

// Dynamic imports for components that should only be loaded on the client side
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });

import "react-datepicker/dist/react-datepicker.css";

const Articles = ({ mail }) => {
  const editor = useRef(null);
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [articles, setArticles] = useState([]);
  const [artId, setArtid] = useState("");
  const [action, setAction] = useState("");
  const [formData, setFormData] = useState({
    heading: "",
    subHeading: "",
    title: "",
    author: "",
  });
  const router = useRouter();
  const context = useContext(UserContext);

  const fetchArticles = async () => {
    const response = await getAllSubHeadings();
    setArticles(response.data.result);
  };

  const replaceSpacesWithHyphens = (str) => {
    return str.replace(/ /g, "-");
  };

  const uniqueArray = (arr) => {
    const seen = new Map();
    return arr?.filter((item) => {
      if (!seen.has(item.heading_id)) {
        seen.set(item.heading_id, true);
        return true;
      }
      return false;
    });
  };

  // Calculate reading time
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rtime = calculateReadingTime(value);
    if (action == "add") {
      const id = uuid();
      const response = await addSubHeading({
        formData,
        value,
        startDate,
        id,
        rtime,
      });
      if (response.data.status) {
        toast.success(response.data.message, {
          position: "bottom-left",
        });
        fetchArticles();
      } else {
        toast.error(response.data.message, {
          position: "bottom-left",
        });
      }
    }
    if (action == "update") {
      const response = await updateSubHeading({
        formData,
        value,
        startDate,
        artId,
        rtime,
      });
      if (response.data.status) {
        toast.success(response.data.message, {
          position: "bottom-left",
        });
        fetchArticles();
      } else {
        toast.error(response.data.message, {
          position: "bottom-left",
        });
      }
    }
  };

  useEffect(() => {
    if (context?.user?.email !== mail) {
      router.push("/");
    }
    fetchArticles();
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
          const newArticles = articles.filter((item) => item.id != id);
          setArticles(newArticles);
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

  const handleClick = (id) => {
    const result = articles.find((obj) => obj.id === id);
    setFormData({
      heading: result.article_id,
      subHeading: result.heading_id,
      title: result.name,
      author: result.author,
    });
    setValue(result.content);
    setStartDate(new Date(result.date)); // Ensure date is a Date object
    setArtid(result.id);
  };

  return (
    <div>
      <div className="mt-[150px]">
        <div className="grid grid-cols-12 bg-white rounded-md m-9 p-9">
          <div className="lg:col-start-3 lg:col-span-8 col-span-12">
            <form onSubmit={handleSubmit} className="">
              <div className="mb-3">
                <Input
                  name="heading"
                  placeholder="Add heading"
                  className="rounded-lg"
                  value={formData.heading}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Input
                  name="subHeading"
                  placeholder="Add sub-heading"
                  className="rounded-lg"
                  value={formData.subHeading}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Input
                  name="title"
                  placeholder="Add title"
                  className="rounded-lg"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <JoditEditor
                name="content"
                ref={editor}
                value={value}
                onChange={(newContent) => setValue(newContent)}
                config={config}
              />
              <div className="border my-5 p-3 w-1/3">
                <h1 className="text-lg font-semibold">Select Date</h1>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="mb-3">
                <Input
                  name="author"
                  type="text"
                  placeholder="author"
                  className="border rounded-lg"
                  value={formData.author}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center space-x-2">
                <button
                  onClick={() => setAction("add")}
                  type="submit"
                  className="bg-primary p-2 text-center text-white rounded-lg hover:cursor-pointer"
                >
                  Add
                </button>
                <button
                  onClick={() => setAction("update")}
                  type="submit"
                  className="bg-primary p-2 text-center text-white rounded-lg hover:cursor-pointer"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-4 grid gap-x-2 gap-y-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
          {articles?.map((item) => (
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
              <button
                className="hover:cursor-pointer"
                onClick={() => {
                  handleClick(item.id);
                }}
              >
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <h3 className="font-semibold text-black text-2xl mx-auto text-center items-center">
                    {item.name}
                  </h3>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
