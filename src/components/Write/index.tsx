"use client";

import { useState } from "react";
import { useUser, SignIn } from "@clerk/nextjs";

interface FormDataType {
  title: string;
  content: string;
  image: File | null; // ✅ allow File or null
  tags: string;
  publishDate: string;
}

export default function AddPost() {
  const { isSignedIn, user } = useUser();

  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    content: "",
    image: null,
    tags: "",
    publishDate: "",
  });

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SignIn routing="hash" />
      </div>
    );
  }

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ Image file input handler
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: e.target.files![0], // ✅ safe access
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append("title", formData.title);
    postData.append("content", formData.content);
    postData.append("slug", slugify(formData.title));
    postData.append("user", user.id);
    postData.append("desc", formData.content.slice(0, 150));
    postData.append("category", "general");
    postData.append(
      "author",
      JSON.stringify({
        name: user.fullName || user.emailAddresses[0].emailAddress,
        image: "",
        designation: "Author",
      })
    );
    postData.append(
      "tags",
      formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .join(",")
    );
    postData.append("publishDate", formData.publishDate);

    if (formData.image) {
      postData.append("image", formData.image); // ✅ add file correctly
    }

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: postData,
      });

      if (response.ok) {
        alert("✅ Post added successfully!");
        setFormData({
          title: "",
          content: "",
          image: null,
          tags: "",
          publishDate: "",
        });
      } else {
        alert("❌ Failed to add post.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ An error occurred while submitting the post.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-700">
          Add New Post
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          {/* Title */}
          <div>
            <label htmlFor="title" className="block font-medium mb-1 text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Post Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block font-medium mb-1 text-gray-700">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Write your blog post here..."
              value={formData.content}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />
          </div>

          {/* Image File Upload */}
          <div>
            <label htmlFor="image" className="block font-medium mb-1 text-gray-700">
              Image (Upload an Image)
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block font-medium mb-1 text-gray-700">
              Tags (comma separated)
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              placeholder="tech, react, coding"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Publish Date */}
          <div>
            <label
              htmlFor="publishDate"
              className="block font-medium mb-1 text-gray-700"
            >
              Publish Date
            </label>
            <input
              id="publishDate"
              name="publishDate"
              type="text"
              placeholder="2025-07-05"
              value={formData.publishDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-md font-semibold text-lg hover:bg-purple-700 transition"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}
