"use client";

import { useParams } from "next/navigation"; // Correct way to get params
import axios from "axios";
import { useEffect, useState } from "react";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Head from "next/head";

const BlogDetailsPage = () => {
  const [blog, setBlog] = useState(null);  // State for the blog data
  const [loading, setLoading] = useState(true);  // State for loading
  const { id } = useParams(); // Use `useParams` to get the route params

  useEffect(() => {
    const fetchBlogDetails = async () => {
       console.log("Blog IDk:", id);  
      if (id) {
        try {
          const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
          console.log(response.data);
          setBlog(response.data);
          setLoading(false); // Data fetched, stop loading
        } catch (error) {
          console.error("Failed to fetch blog details:", error);
          setLoading(false); // Stop loading even if there is an error
        }
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  if (!blog) {
    return <div>Blog not found!</div>; // Handle the case where no blog is returned
  }

  return (
    <>
      {/* Inject Metadata for this specific blog */}
      <Head>
        <title>{blog.title} | Blog Details</title>
        <meta name="description" content={blog.description || "This is Blog Details Page for Startup Nextjs Template"} />
      </Head>

      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {blog.title}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span>{blog.author}</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                            {/* SVG for Date */}
                          </svg>
                        </span>
                        {new Date(blog.date).toLocaleDateString()}
                      </p>
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg width="18" height="13" viewBox="0 0 18 13" className="fill-current">
                            {/* SVG for Comments */}
                          </svg>
                        </span>
                        {blog.commentsCount}
                      </p>
                      <p className="flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg width="20" height="12" viewBox="0 0 20 12" className="fill-current">
                            {/* SVG for Likes */}
                          </svg>
                        </span>
                        {blog.likesCount}
                      </p>
                    </div>
                    <div className="mb-5">
                      <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                      >
                        {blog.category}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      {blog.content}
                    </p>

                    {/* Tags and Sharing */}
                    <div className="items-center justify-between sm:flex">
                      <div className="mb-5">
                        <h4 className="mb-3 text-sm font-medium text-body-color">
                          Popular Tags :
                        </h4>
                        <div className="flex items-center">
                          {blog.tags.map((tag, index) => (
                            <TagButton key={index} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                          Share this post :
                        </h5>
                        <div className="flex items-center sm:justify-end">
                          <SharePost />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
