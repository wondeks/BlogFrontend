import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                   በስመአብ ወወልድ ወመንፈስቅዱስ አሀዱ  አምላክ አሜን፡፡
                  </h1>  <h3 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  አንዳንዶችን ከእሳት ነጥቃቹ አድንዋቸዉ፡፡ይሁዳ 1፡23
                </h3>              
<p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
ማንኛዉም በፈጣሪ በትክክል ማመን እፈልጋልዉ ቁራንን አና አላህን በደንብና በትክክል ማወቅ ፈልጋለሁ የሚል  ሙስሊም ከጭፍን ወገንተኝነት ርቆ የቀድሞ መነጽሩን አዉልቆ በንጹ ልቡ የሚከታተል ከሆነ ከሙስሊሙ ህብረተሰብ እስከ ኢማም ድረስ ማለት እን
ችላለለን ከምንለቃቸዉ ተከታታይ ቪድዮች ቡሃላ የሚያገኘዉ ትክክለኛ አዉቀት ባዶ በርሜልን ማንም ሰዉ አንደሚያንከባልለዉ ለራሳቸዉ ባልገባቸዉና አዉነቱን ከተናገሩ የሚደርስባቸዉን መከራ ፍራቻ ዝምባሉት  ሙዐሊሞች አየተንከባለለ መሆኑን አነደሚረዳ አንጠራጠርም፡፡
እኛም ከርስትያኖች ከሁሉ ተምረን አሁን የሽፍኑን መጋረጃ ቀደን ማዉጣት አለብን፡፡ የተሰበረ ማይገለጥ የለምና ሁሉም ገመና ዐደባባይ የሚዉልበት ዘመን  ነዉ፡፡በመጠኑም ቢሆን የእዉነት ጮራ ሲለቀቅ ጨለማ ቦታዉን ይለቃል፡፡የእዉነት ጮራ  በግርዶሽ የተከለለባቸዉ ብዙ ናቸዉ፡፡ ለዚም ጉዟቸዉ የጨለማ ስለሆነ የጨለማ ተጓዠ በቀጥተኛ መንገድ ሊሄድ አይችልም፡፡ድንገት ግን የብርሃነ ችቦ ከተለኮሰ ትክክለኛዉን መንገድ ይገልጣል፡፡መንገደኛም በሰላም ይሄዳል፡ከሀዋርያት ጀምሮ ቅድስት ቤተክርስትያን ብዙ መከራን ተቀብላለች፡፡ ይህ በማስረጃ የተደገፈ አዉነትን የማዉጣት ስራ እንዲቀጥል ለምትፈልጉ  ( subscribe, share and like ) አድርጉ። 
እግዚአብሔር ኢትዮጵያን እስከ ሕዝቧ ይባርክልን
t.me/Effoy1 </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://t.me/Effoy1" 
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔥 ወደ telegram መነሻ ገጽ ይሂዱ
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@effoyyt" 
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ቲክቶክ ላይ ተከታተሉ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          {/* SVGs omitted for brevity */}
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          {/* SVGs omitted for brevity */}
        </div>
      </section>
    </>
  );
};

export default Hero;
