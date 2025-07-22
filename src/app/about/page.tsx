import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
 title: "ስለ እኛ | የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቲክቶከሮች ኮላጅ",
description: "ይህ የስለ እኛ ገፅ የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቲክቶከሮችን በተለያዩ መንገዶች እምነት፣ ባህል እና መንፈሳዊነትን በዘመናዊ መልኩ የሚያሳይ ፈጠራማ ኮላጅ ነው።"
  // other metadata
};

const AboutPage = () => {
  return (
    <>
     <Breadcrumb
        pageName=""
        description=""
      />
      <Breadcrumb
        pageName="ስለ እኛ"
        description="ይህ የስለ እኛ ገፅ የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቲክቶከሮችን በተለያዩ መንገዶች እምነት፣ ባህል እና መንፈሳዊነትን በዘመናዊ መልኩ የሚያሳይ ፈጠራማ ኮላጅ ነው።"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
