// SearchInput.jsx
import React from "react";

function SearchInput({ inputRef }) {
  return (
    <div className="flex gap-1.5 my-auto w-[80%]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f41d0b04cf513eadfbdc3f2dc1460f68065bd62e7c8a7ad93f17156a581200c?placeholderIfAbsent=true&apiKey=62cc1c00d0454fed8ec6b8f31dfdb7b5"
        className="object-contain shrink-0 w-px aspect-[0.05]"
        alt=""
      />
      <label htmlFor="searchInput" className="sr-only">
        Search StudySpotter
      </label>
      <input
        ref={inputRef}
        id="searchInput"
        type="text"
        placeholder="Search StudySpotter"
        className="basis-auto bg-transparent border-none outline-none w-full"
        aria-label="Search StudySpotter"
      />
    </div>
  );
}

export default SearchInput;
