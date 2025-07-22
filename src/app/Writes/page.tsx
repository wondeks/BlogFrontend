import Breadcrumb from "@/components/Common/Breadcrumb";
import Writes from "@/components/Writes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
};

const WritePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Write Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Writes />

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

export default WritePage;
