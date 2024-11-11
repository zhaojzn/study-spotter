import React from "react";
import CafeHeader from "./CafeHeader";
import RatingSection from "./RatingSection";
import ReviewSection from "./ReviewSection";

function HenningsCafeReview() {
  return (
    <article className="flex flex-col mx-auto w-full rounded-none max-w-[480px] bg-[#F2EBE6]">
      <div className="flex flex-col pb-6 rounded-2xl bg-stone-200 shadow-[-2px_2px_4px_rgba(113,153,167,1)] max-md:max-w-full">
        <header className="flex relative flex-col items-end px-20 pt-4 pb-72 w-full rounded-2xl min-h-[321px] max-md:pb-24 max-md:pl-5 max-md:max-w-full bg-[#F2EBE6]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f26228182523e4bf9137a776f9e44cc4e50ca3d964204993784c48c8118dc256?placeholderIfAbsent=true&apiKey=f2107e4d8abb40989c559df336e7963c"
            alt="Hennings Cafe background"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a76e1c13a017fce4bc2a13b0f76f4c622757eb7fa102ac591b8d3def761ccf?placeholderIfAbsent=true&apiKey=f2107e4d8abb40989c559df336e7963c"
            alt=""
            className="object-contain mb-0 aspect-[0.95] w-[21px] max-md:mb-2.5"
          />
        </header>
        <main className="flex z-10 flex-col pt-3.5 pb-24 mt-0 bg-[#F2EBE6] max-md:max-w-full">
          <CafeHeader />
          <hr className="shrink-0 mt-3.5 h-px border border-solid border-neutral-400 max-md:max-w-full" />
          <RatingSection />
          <hr className="shrink-0 mt-3.5 h-px border border-solid border-neutral-400 max-md:max-w-full" />
        </main>
      </div>
    </article>
  );
}

export default HenningsCafeRewi;
