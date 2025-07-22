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
                  ተረጋጉ፣ውስጣችሁን አድምጡ፣
ሁሉንም መርምሩ፣እውነትን ያዙ፣
አትፍሩ፣አትደንግጡ፣አትሸበሩ፣

                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
ሞት እንደሆን ለሁላችንም ነው! ተረጋጉ፣ውስጣችሁን አድምጡ፣
ሁሉንም መርምሩ፣እውነትን ያዙ፣
አትፍሩ፣አትደንግጡ፣አትሸበሩ፣
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
