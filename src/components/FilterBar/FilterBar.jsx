// FilterBar.jsx
import React from "react";

function FilterBar({ nearbySpots }) {
  return (
    <div className="px-5 pt-6 w-[75%] rounded-2xl bg-stone-200 h-screen overflow-y-auto shadow-[-2px_2px_4px_rgba(113,153,167,1)]">
      <h2 className="text-lg font-bold mb-4">Nearby Study Spots</h2>
      {nearbySpots.length > 0 ? (
        nearbySpots.map((spot) => (
          <div key={spot.id} className="mb-4">
            <h3 className="text-md font-semibold">{spot.name}</h3>
            <p>Rating: {spot.overallRating || "No rating available"}</p>
          </div>
        ))
      ) : (
        <p>No nearby study spots found within 5 km.</p>
      )}
    </div>
  );
}

export default FilterBar;