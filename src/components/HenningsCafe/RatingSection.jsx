import React from "react";
import blueStar from "../../assets/bluestar.svg";
import whiteStar from "../../assets/whitestar.svg";

const ratingItems = [
  { label: "Outlets", blueStars: 4, whiteStars: 1 },
  { label: "Quietness", blueStars: 5, whiteStars: 0 },
  { label: "Atmosphere", blueStars: 4, whiteStars: 1 },
  { label: "Seating availability", blueStars: 3, whiteStars: 2 },
  { label: "Accessibility", blueStars: 0, whiteStars: 0 }, // No stars for accessibility
];

function RatingSection() {
  return (
    <section className="flex flex-col px-3 mt-0 w-full max-md:pr-5 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-1.5 mt-1 text-zinc-800 max-md:mt-10">
              <div className="flex flex-col items-start text-base">
                {ratingItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="flex items-center justify-between mt-4 w-full">
                      <div>{item.label}</div>
                      <div className="flex justify-end ml-auto w-[200px]">
                        {/* Render blue stars */}
                        {Array.from({ length: item.blueStars }).map(
                          (_, starIndex) => (
                            <img
                              key={starIndex}
                              src={blueStar}
                              alt={`${item.label} blue star`}
                              className="object-contain w-6 h-6 mr-2"
                            />
                          )
                        )}
                        {/* Render white stars */}
                        {Array.from({ length: item.whiteStars }).map(
                          (_, starIndex) => (
                            <img
                              key={starIndex + item.blueStars} // Ensure unique key for each star
                              src={whiteStar}
                              alt={`${item.label} white star`}
                              className="object-contain w-6 h-6 mr-2"
                            />
                          )
                        )}
                      </div>
                    </div>
                    {index < ratingItems.length - 1 && <div className="mt-6" />}
                  </React.Fragment>
                ))}
                {/* Accessibility Section */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="px-2 py-1 text-xs rounded-lg bg-stone-200 shadow-[-1px_1px_2px_rgba(0,0,0,0.25)] w-fit">
                    Wheelchair accessible bathroom
                  </div>
                  <div className="px-2 py-1 text-xs rounded-lg bg-stone-200 shadow-[-1px_1px_2px_rgba(0,0,0,0.25)] w-fit">
                    Handicap parking
                  </div>
                  <div className="px-2 py-1 text-xs rounded-lg bg-stone-200 shadow-[-1px_1px_2px_rgba(0,0,0,0.25)] w-fit">
                    Elevators
                  </div>
                  <div className="px-2 py-1 text-xs rounded-lg bg-stone-200 shadow-[-1px_1px_2px_rgba(0,0,0,0.25)] w-fit">
                    Wheelchair accessible entrance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RatingSection;