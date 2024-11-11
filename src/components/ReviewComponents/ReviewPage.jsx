// ReviewPage.jsx
import RatingSection from "./RatingSection";
import AccessibilitySection from "./AccessibilitySection";
import LimitationsSection from "./LimitationsSection";
import CommentSection from "./CommentSection";
import PhotoUpload from "./PhotoUpload";
import LocationSearchSection from "./LocationSearchSection"; // Import the new component

const ReviewPage = () => {
  return (
    <main className="flex overflow-hidden flex-col items-start px-10 py-9 max-w-screen-sm bg-[#F2EBE6] max-md:px-5">
      <h1 className="self-stretch text-3xl text-zinc-800 font-bold">Leave a Review!</h1>
      
      {/* Location Search Section */}
      <LocationSearchSection /> {/* Include the new search bar section */}

      {/* Rating Section */}
      <RatingSection />
      <AccessibilitySection />
      <LimitationsSection />
      <CommentSection className="mt-8" />
      <PhotoUpload />
      
      <button className="self-end px-7 py-2.5 mt-5 text-base whitespace-nowrap rounded-xl bg-[#ACD3E0] shadow-[-2px_2px_3px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mr-2">
        Share
      </button>
    </main>
  );
};

export default ReviewPage;
