"use client";

import { useEffect, useState } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import { Blog } from "@/types/blog";
import axios from "axios";

const BlogListClient = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="-mx-4 flex flex-wrap justify-center">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
        >
          <SingleBlog blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogListClient;
