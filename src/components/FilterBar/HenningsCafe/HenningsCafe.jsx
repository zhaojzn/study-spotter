// HenningsCafe.jsx
import React, { useState } from "react";
import TagButton from "./TagButton";
import ImageContainer from "./ImageContainer";
import ReviewPage from "../review/HenningsCafeReview"; // Placeholder component for the review page

const tags = [
  { text: "Cafe", className: "bg-stone-300" },
  { text: "Wheelchair accessible bathroom", className: "bg-stone-200" },
  { text: "Wheelchair accessible seating", className: "bg-stone-200" },
];

function HenningsCafe() {
  const [showReview, setShowReview] = useState(false);

  const handleTitleClick = () => {
    console.log("Title clicked");
    setShowReview(true);
  };

  return (
    <article className="rounded-none max-w-[451px]">
      {showReview ? (
        <ReviewPage /> // Display the review page component if showReview is true
      ) : (
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full text-xs text-zinc-800">
              <h1
                className="text-base cursor-pointer"
                onClick={handleTitleClick}
              >
                Hennings Cafe
              </h1>
              <ImageContainer
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50cfadde38729ff9feb3e774abc27c92024554a4f7c8b1e51f39ca6f7b03eff8?placeholderIfAbsent=true&apiKey=62cc1c00d0454fed8ec6b8f31dfdb7b5"
                alt="Hennings Cafe logo"
                className="object-contain max-w-full rounded-sm aspect-[4.95] w-[109px]"
              />
              <div className="flex gap-1.5 self-stretch mt-1.5 flex-wrap">
                {tags.map((tag, index) => (
                  <TagButton key={index} text={tag.text} className={tag.className} />
                ))}
              </div>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ImageContainer
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b299f9cda05c42c30ababfb775dbc29024ea7f7ffc798eaed01edcebf8e5e91c?placeholderIfAbsent=true&apiKey=62cc1c00d0454fed8ec6b8f31dfdb7b5"
              alt="Hennings Cafe interior"
              className="object-contain grow shrink-0 max-w-full rounded-2xl aspect-[1.4] w-[179px]"
            />
          </section>
        </div>
      )}
    </article>
  );
}

export default HenningsCafe;
