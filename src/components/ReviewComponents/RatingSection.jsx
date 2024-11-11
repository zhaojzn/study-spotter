import { useState } from "react";
import starUncoloured from "../../assets/star-uncoloured.svg";
import starColoured from "../../assets/star-coloured.svg";

const RatingSection = ({ onRatingChange }) => {
  const [ratings, setRatings] = useState({
    Outlets: 0,
    Quietness: 0,
    Atmosphere: 0,
    "Seating availability": 0,
  });

  const handleStarClick = (item, rating) => {
    const newRatings = { ...ratings, [item]: rating };
    setRatings(newRatings);
    onRatingChange(newRatings);
  };

  return (
    <section className="self-stretch max-md:max-w-full">
      <div className="flex flex-col gap-5 max-md:flex-col">
        {Object.keys(ratings).map((item) => (
          <div key={item} className="flex items-center justify-between gap-3 mt-5">
            <span className="text-2xl text-zinc-800">{item}</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <img
                  key={star}
                  src={star <= ratings[item] ? starColoured : starUncoloured}
                  className="w-9 h-9 cursor-pointer"
                  onClick={() => handleStarClick(item, star)}
                  alt={`${star} star`}
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
