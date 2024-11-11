
import React from "react";

function TagButton({ text }) {
  return (
    <button className="px-1 py-1 whitespace-nowrap rounded-lg bg-stone-300 shadow-[-1px_1px_2px_rgba(0,0,0,0.25)]">
      {text}
    </button>
  );
}

export default TagButton;
