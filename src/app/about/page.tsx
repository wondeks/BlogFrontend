import AboutSectionFive from "@/components/About/AboutSectionFive";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionSeven from "@/components/About/AboutSectionSeven";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import  useRef from "next";
import { Metadata } from "next";
import AboutSectionEight from "@/components/About/AboutSectionEight";
import AboutSectionNine from "@/components/About/AboutSectionNine";
import AboutSectionTwelve from "@/components/About/AboutSectionTwelve";
import AboutSectionTen from "@/components/About/AboutSectionTen";
import AboutSectionEleven from "@/components/About/AboutSectionEleven";
import AboutSectionThirtyn from "@/components/About/AboutSectionThirtyn";
import AboutSectionFourten from "@/components/About/AboutSectionFourten";
import AboutSectionFiften  from "@/components/About/AboutSectionFiften";
import AboutSection30 from "@/components/About/AboutSection30";
export const metadata: Metadata = {
 title: "ስለ እኛ | የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቲክቶከሮች ኮላጅ",
description: "ይህ የስለ እኛ ገፅ የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቲክቶከሮችን በተለያዩ መንገዶች እምነት፣ ባህል እና መንፈሳዊነትን በዘመናዊ መልኩ የሚያሳይ ፈጠራማ ኮላጅ ነው።"
  // other metadata


};

const AboutPage = () => {
  return (
    <>
    
     <br></br>
     <br></br>
      <Breadcrumb
        pageName="ስለ እኛ"
        description="በስመአብ ወወልድ ወመንፈስቅዱስ አሀዱ  አምላክ አሜን፡፡
ማንኛዉም በፈጣሪ በትክክል ማመን እፈልጋልዉ ቁራንን አና አላን  በደንብና በትክክል ማወቅ ፈልጋለሁ የሚል
  ሙስሊም ከጭፍን ወገንተኝነት ርቆ የቀድሞ መነጽሩን አዉልቆ በንጹ ልቡ የሚከታተል ከሆነ ከሙስሊሙ ህብረተሰብ እስከ ኢማም ድረስ ማለት እችላለሁ ከምለቃቸዉ ተከታታይ ቪድዮች ቡሃላ የሚያገኘዉ ትክክለኛ አዉቀት  ባዶ በርሜልን ማንም ሰዉ አንደሚያንከባልለዉ ለራሳቸዉ ባልገባቸዉና አዉነቱን ከተናገሩ የሚደርስባቸዉን መከራ ፍራቻ ዝምባሉት  ሙዐሊሞች አየተንከባለለ መሆኑን አነደሚረዳ አልጠራጠርም፡፡
እኛም ከርስትያኖች ከሁሉ ተምረን አሁን የሽፍኑን መጋረጃ ቀደን ማዉጣት አለብን፡፡ የተሰበረ ማይገለጥ የለምና ሁሉም ገመና ዐደባባይ የሚዉልበት ዘመን  ነዉ፡፡በመጠኑም ቢሆን የእዉነት ጮራ ሲለቀቅ ጨለማ ቦታዉን ይለቃል፡፡የእዉነት ጮራ  በግርዶሽ የተከለለባቸዉ ብዙ ናቸዉ፡፡ ለዚም ጉዟቸዉ የጨለማ ስለሆነ የጨለማ ተጓዠ በቀጥተኛ መንገድ ሊሄድ አይችልም፡፡ድንገት ግን የብርሃነ ችቦ ከተለኮሰ ትክክለኛዉን መንገድ ይገልጣል፡፡መንገደኛም በሰላም ይሄዳል፡ከሀዋርያት ጀምሮ ቅድስት ቤተክርስትያን ብዙ መከራን ተቀብላለች፡፡ ይህ በማስረጃ የተደገፈ አዉነትን የማዉጣት ስራ እንዲቀጥል ለምትፈልጉ  ( subscribe, share and like ) አድርጉ። 
እግዚአብሔር ኢትዮጵያን እስከ ሕዝቧ ይባርክልን"
      />

    
      <AboutSectionOne />
      <AboutSectionTwo  />
      <AboutSectionThree    />
      <AboutSectionFour />
      <AboutSectionFive />
       <AboutSectionSix />
       <AboutSectionSeven />
       <AboutSectionEight />
     < AboutSectionTwelve />
         < AboutSectionTen />
      <AboutSectionNine />

     < AboutSectionEleven />
       < AboutSectionFourten/>
       < AboutSectionThirtyn/>
       <AboutSectionFiften/>
       <AboutSection30/>
       
        
    </>
  );
};

export default AboutPage;
