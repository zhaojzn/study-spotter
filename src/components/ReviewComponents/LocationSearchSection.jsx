// LocationSearchSection.jsx
import { useState } from "react";

const LocationSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query on input change
  };

  return (
    <section className="w-full mt-5">
      <label htmlFor="locationSearch" className="text-2xl text-zinc-800 max-md:ml-1">
        Search for a Location:
      </label>
      <input
        type="text"
        id="locationSearch"
        value={searchQuery}
        onChange={handleSearchChange}
        className="flex shrink-0 mt-1.5 w-full rounded-xl bg-[#EBE1DA] shadow-[inset_-1px_1px_3.2px_#909FA5] p-3 focus:outline-none focus:ring-2 focus:ring-[#7199A7]"
        placeholder="Enter location name"
        aria-label="Search for location"
      />
    </section>
  );
};

export default LocationSearchSection;
