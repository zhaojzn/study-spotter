import { useState } from "react";
import starUncoloured from "../../assets/star-uncoloured.svg";
import starColoured from "../../assets/star-coloured.svg";

const ratingItems = [
  {
    label: "Outlets",
    imageSrc: starUncoloured,
    activeImageSrc: starColoured,
  },
  {
    label: "Quietness",
    imageSrc: starUncoloured,
    activeImageSrc: starColoured,
  },
  {
    label: "Atmosphere",
    imageSrc: starUncoloured,
    activeImageSrc: starColoured,
  },
  {
    label: "Seating availability",
    imageSrc: starUncoloured,
    activeImageSrc: starColoured,
  },
];

const RatingSection = () => {
  const [ratings, setRatings] = useState(Array(ratingItems.length).fill(0));

  const handleStarClick = (itemIndex, starIndex) => {
    const newRatings = [...ratings];
    newRatings[itemIndex] = starIndex + 1; // Update rating for this item
    setRatings(newRatings);
  };

  return (
    <section className="self-stretch max-md:max-w-full">
      <div className="flex flex-col gap-5 max-md:flex-col">
        {ratingItems.map((item, itemIndex) => (
          <div key={itemIndex} className="flex items-center justify-between gap-3 mt-5">
            <span className="text-2xl text-zinc-800">{item.label}</span>
            <div className="flex gap-2 justify-end"> {/* gap-2 adds spacing between stars */}
              {[...Array(5)].map((_, starIndex) => (
                <img
                  key={starIndex}
                  src={starIndex < ratings[itemIndex] ? item.activeImageSrc : item.imageSrc}
                  alt={`${starIndex + 1} star`}
                  className="w-9 h-9 cursor-pointer"
                  onClick={() => handleStarClick(itemIndex, starIndex)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RatingSection;
