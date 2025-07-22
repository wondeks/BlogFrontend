import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: " አገናኝ ገፅ | የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቲክቶከሮች ኮላጅ",
description: "ይህ የስለ እኛ ገፅ የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቲክቶከሮችን በተለያዩ መንገዶች እምነት፣ ባህል እና መንፈሳዊነትን በዘመናዊ መልኩ የሚያሳይ ፈጠራማ ኮላጅ ነው።"
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />

      {/* Link to Write page */}
      <div className="mt-10 flex justify-center">
        <Link href="/contact/Write" legacyBehavior>
          <a className="inline-block rounded bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition">
            Go to Write Page
          </a>
        </Link>
      </div>
    </>
  );
};

export default ContactPage;
