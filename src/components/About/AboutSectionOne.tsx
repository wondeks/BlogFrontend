"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import AboutSectionTwo from "./AboutSectionTwo";
import AboutSectionThree from "./AboutSectionThree";
import AboutSectionFour from "./AboutSectionFour";
import AboutSectionFive from "./AboutSectionFive";
import AboutSectionSix from "./AboutSectionSix";
import AboutSectionSeven from "./AboutSectionSeven";
import AboutSectionEight from "./AboutSectionEight";
import AboutSectionNine from "./AboutSectionNine";
import AboutSectionTen from "./AboutSectionTen";
import AboutSectionEleven from "./AboutSectionEleven";
import AboutSectionTwelve from "./AboutSectionTwelve";
import AboutSectionThirtyn from "./AboutSectionThirtyn";
import AboutSectionFourten from "./AboutSectionFourten";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const [showSectionTwo, setShowSectionTwo] = useState(false);
  const [showSectionThree, setShowSectionThree] = useState(false);
  const [showSectionFour, setShowSectionFour] = useState(false);
  const [showSectionFive, setShowSectionFive] = useState(false); 
  const [showSectionSix, setShowSectionSix] = useState(false);
  const [showSectionSeven, setShowSectionSeven] = useState(false);
  const [showSectionEight, setShowSectionEight] = useState(false);
  const [showSectionNine, setShowSectionNine] = useState(false);
  const [showSectionTen, setShowSectionTen] = useState(false);
  const [showSectionEleven, setShowSectionEleven] = useState(false);
  const [showSectionTwelve, setShowSectionTwelve] = useState(false);
    const [showSectionThirtyn, setShowSectionThirtyn] = useState(false);
        const [showSectionFourten, setShowSectionFourten] = useState(false);
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
             

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                

                <div className="mt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => setShowSectionTwo(!showSectionTwo)}
                    className="rounded bg-primary px-2 py-3 text-white hover:bg-primary-dark"
                  >
                  <h5>  1. ክርሰትና መግብያ እና
                     የክርስትና ትርጉም
 </h5>
                  </button>

<button
                    onClick={() => setShowSectionFour(!showSectionFour)}
                    className="rounded bg-primary px-6 py-3 text-white hover:bg-primary-dark"
                  >
                   2. እስልምና  መግብያ እና የእስልምና ትርጉም?
                  </button>

                  <button
                    onClick={() => setShowSectionThree(!showSectionThree)}
                    className="rounded bg-primary px-6 py-3 text-white hover:bg-primary-dark"
                  >

                    3.  ጌታችን ለትክክለኝነቱ ማስጃ ካቀረበ ቡሃላ
          ለኛ ለአማኞቹ  ምን መሰረተ
                  </button>

                              
                  <button
                    onClick={() => setShowSectionFive(!showSectionFive)}
                    className="rounded bg-primary px-6 py-3 text-white hover:bg-primary-dark"
                  >
                   4.  የሙሃመድ አላማ 610-632 ና ለተከተሉት ኡማዉ በስተመጨረሻ ምን ሰጠ
                  </button>


                  <button
                    onClick={() => setShowSectionSix(!showSectionSix)}
                    className="rounded bg-primary px-6 py-3 text-white hover:bg-primary-dark"
                  >
                 6. ሙሃመድ ማነዉ?
                  </button>

                    <button
                    onClick={() => setShowSectionEleven(!showSectionEleven)}
                    className="rounded bg-primary px-5 py-3 text-white hover:bg-primary-dark"
                  >
                  12. የአላህ ማንነት

                  </button>

                  <button
                    onClick={() => setShowSectionSeven(!showSectionSeven)}
                    className="rounded bg-primary px-6 py-3 text-white hover:bg-primary-dark"
                  >
                7.   ሙሃመድ እሳ እነደተሰቀለ ያምን ነበረ፡፡
                  </button>


                  <button
                    onClick={() => setShowSectionEight(!showSectionEight)}
                    className="rounded bg-primary px-6 py-3 text-white hover:bg-primary-dark"
                  >
                  8. የጌታችን የጸጋ ልጅነት
                  </button>

                  <button
                    onClick={() => setShowSectionNine(!showSectionNine)}
                    className="rounded bg-primary px-6 py-3 text-white hover:bg-primary-dark"
                  >

                  9. የጌታችን  አምላክነትና በስጋ መገለጥ
                  </button>

                  <button
                    onClick={() => setShowSectionTen(!showSectionTen)}
                    className="rounded bg-primary px-5 py-3 text-white hover:bg-primary-dark"
                  >
                  10. ነገረ ድህነት
                  </button>

        
        
                
                  <button
                    onClick={() => setShowSectionTwelve(!showSectionTwelve)}
                    className="rounded bg-primary px-5 py-3 text-white hover:bg-primary-dark"
                  >
                  13.  ሚስጢረ ሥላሴ


                  </button>
                  <button
                    onClick={() => setShowSectionThirtyn(!showSectionThirtyn)}
                    className="rounded bg-primary px-5 py-3 text-white hover:bg-primary-dark"
                  >
                 እጠፋንታ 

                  </button>
                   <button
                    onClick={() => setShowSectionFourten(!showSectionFourten)}
                    className="rounded bg-primary px-5 py-3 text-white hover:bg-primary-dark"
                  >
                 እጠፋንታ ፤ታቦት፤ዘረኝነት፤ባርያ ፤እርኩሰት ፤ምጽዋት፤ጾም ፤ ሰብአዊነት፤ ነቢያት፤ስእላት፤ መጠጥ፡፡

                  </button>



                </div>

              </div>

              
            </div>
          </div>
        </div>
      </div>

            <div className="container">
        <div className="-mx-4 flex flex-wrap items-right">
          <div className="w-full px-0">
            

                {showSectionTwo && <AboutSectionTwo />}
                {showSectionThree && <AboutSectionThree />}
                {showSectionFour && <AboutSectionFour />}
                 {showSectionFive && <AboutSectionFive />}
                  {showSectionSix && <AboutSectionSix />}
                  {showSectionSeven && <AboutSectionSeven />}
                  {showSectionEight && <AboutSectionEight />}
                  {showSectionNine && <AboutSectionNine />}
                  {showSectionTen && <AboutSectionTen />}
                  {showSectionEleven && <AboutSectionEleven />}

                  {showSectionTwelve && <AboutSectionTwelve />}
                  {showSectionThirtyn && <AboutSectionThirtyn />}
                 
                  {showSectionFourten && <AboutSectionFourten />}
</div></div>   
</div>

    </section>
  );
};

export default AboutSectionOne;
