import React from "react";

function ReviewSection() {
  return (
    <section className="flex flex-col gap-8 self-start mt-4 text-base text-zinc-800 max-md:mt-10 px-3">
      {/* First Review */}
      <div className="flex gap-5">
        <div
          className="flex shrink-0 rounded-full bg-zinc-300 h-[50px] w-[50px]"
          role="img"
          aria-label="User avatar"
        />
        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
          <h2 className="self-start font-bold">Tired student</h2>
          <p className="mt-0">Sat here and worked on a hackathon for 12 hours!</p>
        </div>
      </div>

      {/* Second Review */}
      <div className="flex gap-5">
        <div
          className="flex shrink-0 rounded-full bg-zinc-300 h-[50px] w-[50px]"
          role="img"
          aria-label="User avatar"
        />
        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
          <h2 className="self-start font-bold">Excited student</h2>
          <p className="mt-0">Had an amazing time working on the project with the team!</p>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;