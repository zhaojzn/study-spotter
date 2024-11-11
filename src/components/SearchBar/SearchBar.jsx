// SearchBar.jsx
import React, { useRef, useEffect } from "react";
import SearchInput from "./SearchInput";
import SearchIcon from "./SearchIcon";
function SearchBar({ onPlaceSelected }) {
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
          onPlaceSelected({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col text-xs font-medium rounded-none w-[500px] text-slate-400">
      <form className="flex flex-wrap gap-5 justify-between px-5 py-2.5 w-full rounded-2xl bg-stone-200 shadow-[-2px_2px_4px_rgba(113,153,167,1)]">
        <SearchInput inputRef={inputRef} />
        <SearchIcon />
      </form>
    </div>
  );
}

export default SearchBar;
