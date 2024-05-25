"use client";

import React, { useEffect, useState } from "react";
import {
  getAllSubHeadings,
  addHeading,
  deleteHeading,
} from "../../../../services/articles";
import { Input } from "@material-tailwind/react";
import { toast } from "react-toastify";
import Link from "next/link";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";

const Topic = ({ article_id }) => {
  const [headings, setHeadings] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
  });
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
  const replaceHyphensWithSpaces = (str) => {
    return str.replace(/-/g, " ");
  };
  const name = replaceHyphensWithSpaces(article_id);
  const fetchHeadings = async () => {
    const response = await getAllSubHeadings();

    const filteredArticles = response.data.result.filter(
      (article) => article.article_id === name
    );
    setHeadings(uniqueArray(filteredArticles));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = formData.title;
    const response = await addHeading({ name, title });
    if (response.data.status) {
      toast.success(response.data.message, {
        position: "bottom-left",
      });
      fetchHeadings();
    } else {
      toast.error(response.data.message, {
        position: "bottom-left",
      });
    }
  };
  useEffect(() => {
    fetchHeadings();
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
          const result = await deleteHeading(id);
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
  return (
    <div className="mt-[150px]">
      <div className="grid grid-cols-12 bg-white rounded-md m-9 p-9">
        <div className="lg:col-start-5 lg:col-span-4 col-span-12">
          <form onSubmit={handleSubmit} className="lg:flex justify-center">
            <Input
              name="title"
              placeholder="Add a heading for the article"
              className="rounded-lg"
              value={formData.title}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-primary p-2 lg:ml-2 text-white rounded-lg"
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4 grid gap-x-2 gap-y-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
        {/* headings */}
        {headings?.map((item) => (
          <div key={item.id}>
            <div className="border-primary border-4 transform transition duration-300 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <button
                onClick={() => {
                  deleteA(item.id);
                }}
              >
                <MdCancel className="float-right hover:scale-150" />
              </button>
              <Link href={`/admin/articles/${item.article_id}/${item.id}`}>
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <h3 className="font-semibold text-black text-2xl mx-auto text-center items-center">
                    {item.heading_id}
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
