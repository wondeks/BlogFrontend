"use client";

import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Head from "next/head";

const BlogDetailsPage = () => {
  const { id } = useParams(); // ✅ Correct param name based on route
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      console.log("Blog ID:", id);

      if (!id) return;

      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Failed to fetch blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) return <div className="pt-32 text-center">Loading...</div>;
  if (!blog) return <div className="pt-32 text-center text-red-500">Blog not found!</div>;

  return (
    <>
      <Head>
        <title>{blog.title} | Blog Details</title>
        <meta
          name="description"
          content={blog.description || "This is the blog details page."}
        />
      </Head>

      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                  {blog.title}
                </h2>

                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center gap-5">
                    <span className="text-base font-medium text-body-color">
                      By <span>{blog.author}</span>
                    </span>
                    <span className="text-base font-medium text-body-color">
                      📅 {new Date(blog.date).toLocaleDateString()}
                    </span>
                    {blog.commentsCount && (
                      <span className="text-base font-medium text-body-color">💬 {blog.commentsCount}</span>
                    )}
                    {blog.likesCount && (
                      <span className="text-base font-medium text-body-color">❤️ {blog.likesCount}</span>
                    )}
                    {blog.category && (
                      <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                        {blog.category}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  {blog.content}
                </p>

                <div className="flex flex-wrap justify-between">
                  <div className="mb-5">
                    <h4 className="mb-3 text-sm font-medium text-body-color">Popular Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags?.map((tag: string, index: number) => (
                        <TagButton key={index} text={tag} />
                      ))}
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                      Share this post:
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
      </section>
    </>
  );
};

export default BlogDetailsPage;
