"use client";

import React, { useEffect, useState } from "react";
import UserContext from "../../../context/UserContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import {
  addSubHeading,
  getAllSubHeadings,
  deleteSubHeading,
} from "../../../services/articles";
import { Input } from "@material-tailwind/react";
import { toast } from "react-toastify";
import Link from "next/link";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";

const Articles = ({ mail }) => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
  });
  const router = useRouter();
  const context = useContext(UserContext);
  const fetchArticles = async () => {
    const response = await getAllSubHeadings();
    const data = uniqueArray(response.data.result);
    console.log(data);
    setArticles(data);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addSubHeading(formData);
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
  return (
    <div>
      <div className="mt-[150px]">
        <div className="grid grid-cols-12 bg-white rounded-md m-9 p-9">
          <div className="lg:col-start-5 lg:col-span-4 col-span-12">
            <form onSubmit={handleSubmit} className="lg:flex justify-center">
              <Input
                name="title"
                placeholder="Add Article"
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
          {/* financial tools */}
          {articles?.map((item) => (
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
                <Link
                  href={`/admin/articles/${replaceSpacesWithHyphens(
                    item.article_id
                  )}`}
                >
                  <div className="wow fadeInUp" data-wow-delay=".15s">
                    <h3 className="font-semibold text-black text-2xl mx-auto text-center items-center">
                      {item.article_id}
                    </h3>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
