import React from "react";
import whiteheart from "../../assets/whiteheart.svg";
import whitestar from "../../assets/whitestar.svg";
import bluestar from "../../assets/bluestar.svg";
import add from "../../assets/addbutton.svg";

function CafeHeader() {
  return (
    <section className="flex flex-col items-start px-3 w-full text-zinc-800 max-md:max-w-full">
      <div className="flex justify-between self-stretch text-3xl max-md:max-w-full">
        <h1 className="self-center font-InstrumentSans">Hennings Cafe</h1>
        <div className="flex gap-x-2 justify-end">
          <img
            loading="lazy"
            src={add} 
            alt="Add Button"
            className="object-contain mt-0 max-w-full rounded-sm w-[30px]"
          />
          <img
            loading="lazy"
            src={whiteheart} 
            alt="White heart"
            className="object-contain mt-0 max-w-full rounded-sm w-[30px]"
          />
        </div>
      </div>
      <p className="text-base text-zinc-600 font-InstrumentSans">
        6224 Agricultural Rd #325, Vancouver, BC V6T 1Z1
      </p>
      
      {/* Rating Stars Section */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <img
            key={`blue-star-${index}`}
            src={bluestar}
            alt="Blue star"
            className="object-contain w-[24px] h-[24px]"
          />
        ))}
        <img
          src={whitestar}
          alt="White star"
          className="object-contain w-[24px] h-[24px]"
        />
      </div>

      <p className="mt-2.5 text-base font-InstrumentSans">Cafe</p>
    </section>
  );
}

export default CafeHeader;