import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph  , tags, publishDate, author } = blog;

  // Ensure the image path is correctly formatted (adjust according to your backend structure)
  const imageUrl = image ? `http://localhost:5000/${image.replace(/\\/g, "/")}` : "/default-image.jpg";

  // Format the publish date (assuming it's in string format like '2025-07-05')
  const formattedDate = new Date(publishDate).toLocaleDateString();

  // Fallback for author data if not present in the blog
  const authorName = author?.name || "Unknown Author";
  const authorImage = author?.image || "/default-author.jpg";
  const authorDesignation = author?.designation || "Unknown";
    const paragraphs = blog?.paragraph || "Unknown";

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      {/* Blog Link and Image */}
      <Link   href={`/blog/${blog._id}`}  className="relative block aspect-[37/22] w-full">
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0] || "General"}
        </span>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </Link>

      {/* Blog Details */}
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
         <Link
      href={`/blog/${blog._id}`}
        className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
>
      {title}
        </Link>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>

        {/* Author and Date Info */}
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            {/* Author Image and Info */}
            <div className="mr-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={authorImage} alt="author" layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                By {authorName}
              </h4>
              <p className="text-xs text-body-color">{authorDesignation}</p>
            </div>
          </div>

          {/* Publish Date */}
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">Date</h4>
            <p className="text-xs text-body-color">{formattedDate}</p>
          </div>
        </div>

        {/* Displaying full paragraph */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-black dark:text-white">Full Article:</h3>
          <p className="text-base text-body-color dark:text-white">{paragraphs}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
