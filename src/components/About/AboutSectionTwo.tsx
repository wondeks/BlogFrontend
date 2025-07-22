import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ኮሌጅ ምስል"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ኮሌጅ ምስል"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  ስለ ኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ኮሌጅ
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  ኮሌጁ በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን በሚካሄደው የመምህራን ማማከርና የተማሪዎች ማስተማር እንዲሁም የመንፈሳዊ ሥነ ምግባር እና የቤተክርስቲያን ትምህርት ማዕከል ነው።
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  አስተዳደርና ድጋፍ
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  ኮሌጁ ተማሪዎችን በጥራት የተሞላ ትምህርት ለመስጠት በሙያ ያላቸው አስተዳደሮችና መምህራን አሉት። የተማሪዎች ድጋፍን እና መንፈሳዊ አገልግሎት ይሰጣል።
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  እምነታዊ ትምህርት
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  ኮሌጁ ተማሪዎችን በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ እምነት መሠረት ያለው መንፈሳዊ ትምህርት እና ባህላዊ እንቅስቃሴ እንዲቀበሉ ያበረከታል።
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
