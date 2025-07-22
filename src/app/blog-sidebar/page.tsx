import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "የብሎግ ዝርዝር ገፅ | ለስታርታፕ እና SaaS የተሰራ ነፃ Next.js አብነት",
  description: "ይህ የብሎግ ዝርዝር ገፅ ለስታርታፕ Nextjs አብነት ነው",
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* ትላልቅ የመስክ ክፍል */}
            <div className="w-full px-4 lg:w-8/12">
              <article>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  10 አስደናቂ ድር ጣቢያዎች ለነፃ የእቃ ፎቶዎችና ዲጂታል እቃዎች ማውረድ
                </h1>
                {/* ደራሲ መረጃ */}
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4 relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src="/images/blog/author-02.png"
                          alt="ደራሲ"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          በ <span>ሙሻሮፍ ቺ</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center space-x-5 text-base font-medium text-body-color">
                      <p className="flex items-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="currentColor"
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.5 0a7.5 7.5 0 1 0 7.5 7.5A7.509 7.509 0 0 0 7.5 0Zm0 13.5A6 6 0 1 1 13.5 7.5 6.007 6.007 0 0 1 7.5 13.5Z" />
                          <path d="M7.5 3a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 7.5 3Zm0 7.5A3 3 0 1 1 10.5 7.5 3.004 3.004 0 0 1 7.5 10.5Z" />
                        </svg>
                        12 ጃንዩወሪ 2024
                      </p>
                      <p className="flex items-center">
                        <svg
                          width="18"
                          height="13"
                          viewBox="0 0 18 13"
                          fill="currentColor"
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h18v13H0z" fill="none" />
                          <path d="M9 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>
                        50 አስተያየቶች
                      </p>
                      <p className="flex items-center">
                        <svg
                          width="20"
                          height="12"
                          viewBox="0 0 20 12"
                          fill="currentColor"
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 0a10 10 0 1 0 10 10A10.012 10.012 0 0 0 10 0Zm0 9a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
                        </svg>
                        35 እይታዎች
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      ንድፍ
                    </a>
                  </div>
                </div>
                {/* ምስል እና ይዘት */}
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg">
                    ዱይስ አውቴ ኢሩሬ ዶሎር ኢን ረፐሬህንደርት ኢን ቮሉፕቴ ቬሊት ኤሴ ሲሉም ዶሎር ኢዩ ፉግያት ኑላ ፓሪያቱር። ኤክስፑንተር ሲንት ኦካካት ኩፒዳታት።
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-01.jpg"
                        alt="ምስል"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  {/* እንደ ምሳሌ ተጨማሪ አካላት ይጨምሩ */}
                </div>
                {/* ታጎችና እንደ Share የብሎግ ክፍል */}
                <div className="flex items-center justify-between sm:flex-row flex-col">
                  <div>
                    <h4 className="mb-3 text-sm font-medium text-body-color">
                      ታዋቂ ታጎች:
                    </h4>
                    <div className="flex space-x-3">
                      <TagButton text="ንድፍ" />
                      <TagButton text="እድገት" />
                      <TagButton text="መረጃ" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                      ይህን ልጥፍ አጋራችሁ:
                    </h5>
                    <div className="flex space-x-3 justify-end">
                      <SharePost />
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* ጎን ሳይድባር */}
            <aside className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mb-10 mt-12 rounded-sm bg-white p-6 dark:shadow-none lg:mt-0">
                <input
                  type="text"
                  placeholder="እዚህ ይፈልጉ..."
                  className="border-stroke dark:text-body-color-dark dark:shadow-two mr-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                />
                <button
                  aria-label="መፈለጊያ አዝራር"
                  className="mt-3 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-sm bg-primary text-white"
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.707 17.293a1 1 0 0 1-1.414 0L13.5 12.5h-1.5a7 7 0 1 1 0-14h3a7 7 0 1 1 0 14h-1.5l4.793 4.793a1 1 0 0 1 0 1.414Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              {/* አካል አዳራሽ: Related Posts, Newsletter */}
              
              <NewsLatterBox />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
