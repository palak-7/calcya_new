"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
export const metadata = {
  title: "Admin Page | Calcya",
  description: "This is Admin Page Calcya",
  // other metadata
};
const Admin = () => {
  const router = useRouter();
  const context = useContext(UserContext);

  useEffect(() => {
    if(context?.user?.email !== "meenusehgal@gmail.com"){
      router.push('/');
    }
  },[]);
 
  return (
    <div>
        <div className="mt-[140px]">
          <section id="features" className="lg:-mt-30 md:pb-20 lg:px-3">
            {/* cards */}
            <div className="mx-16">
              <div className="grid gap-x-2 gap-y-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
                {/* financial tools */}
                <Link href="/admin/articles">
                  <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
                    <div className="wow fadeInUp" data-wow-delay=".15s">
                      <h3 className="font-semibold text-black text-2xl mx-auto text-center items-center">
                        Add Articles
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default Admin;
