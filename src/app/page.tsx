import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog/[id]";
import Blogs from "@/components/Blogs/[id]";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Write from "@/components/Write";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "ስለ እኛ | የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቲክቶከሮች ኮላጅ",
description: "ይህ ገፅ የኢትዮጵያ ኦርቶዶክስ ተዋህዶ እምነትን፣ ባህልን እና መንፈሳዊነትን በቲክቶክ በኩል የሚያሳይ ፈጠራማ ኮላጅ ነው።",

  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Blogs />
      <Contact />
      <Write />
    </>
  );
}
