import { useState, useEffect, useRef } from "react";

const LocationSearchSection = ({ onPlaceSelected }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        bounds: {
          north: 49.378,
          south: 49.002,
          east: -122.422,
          west: -123.224,
        },
        strictBounds: true,
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();

          // Pass the formatted location array [lat, lng]
          onPlaceSelected([lat, lng]);
          setSearchQuery(place.formatted_address || "");
        }
      });
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className="w-full mt-5">
      <label htmlFor="locationSearch" className="text-2xl text-zinc-800 max-md:ml-1">
        Search for a Location:
      </label>
      <input
        type="text"
        id="locationSearch"
        ref={inputRef}
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
