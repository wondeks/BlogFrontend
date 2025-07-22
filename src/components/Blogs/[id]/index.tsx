// components/Blog.tsx

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import SectionTitle from "../../Common/SectionTitle";
import SinglesBlog from "../SinglesBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/postss");
        setBlogs(response.data);  // Store the blogs in the state
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section
      id="blogs"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        {/* Write Button */}
        <div className="flex justify-end mb-10">
          <Link href="/write">
            <button className="w-24 h-24 bg-blue-800 rounded-full flex items-center justify-center text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
              Write
            </button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {/* Iterate over blogs and render each one using SingleBlog */}
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog._id} className="w-full">
                <SinglesBlog blog={blog} />
                <Link href={`/blogs/${blog._id}`}>Read More</Link>
                
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center">No blogs posts available.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
