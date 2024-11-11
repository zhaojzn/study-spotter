import React, { useState } from "react";
import LocationSearchSection from "./LocationSearchSection";
import AccessibilitySection from "./AccessibilitySection";
import CommentSection from "./CommentSection";
import LimitationsSection from "./LimitationsSection";
import RatingSection from "./RatingSection";
import { db, GeoPoint } from '../../firebase'; // Import GeoPoint
import { collection, addDoc } from 'firebase/firestore';

const ReviewPage = ({ closeModal }) => {
  const [location, setLocation] = useState(null); // Location will store lat and lng as a plain object
  const [accessibilityOptions, setAccessibilityOptions] = useState([]);
  const [comments, setComments] = useState("");
  const [limitationsOptions, setLimitationsOptions] = useState([]);
  const [ratings, setRatings] = useState({});

  const handleSubmit = async () => {
    if (!location) {
      alert("Please select a location before submitting.");
      return;
    }

    // Convert the location to a GeoPoint
    const locationGeoPoint = new GeoPoint(location.lat, location.lng);

    // Structure the review data
    const reviewData = {
      location: locationGeoPoint, // Use GeoPoint for Firestore
      accessibilityOptions,
      comments,
      limitationsOptions,
      ratings,
      createdAt: new Date(),
    };
    
    console.log("Attempting to submit Review Data:", reviewData);
    
    try {
      const reviewsCollection = collection(db, "reviews");
      await addDoc(reviewsCollection, reviewData);
      alert("Review submitted successfully!");
      closeModal(); // Close the modal after submission
    } catch (error) {
      console.error("Error submitting review:", error);
      alert(`Failed to submit review. Error: ${error.message || 'Unknown error'}`);
    }
  };

  return (
    <main className="flex flex-col items-start px-10 py-9 max-w-screen-sm bg-[#F2EBE6] max-md:px-5 overflow-auto h-full">
      <h1 className="self-stretch text-3xl text-zinc-800 font-bold">Leave a Review!</h1>
      <LocationSearchSection onPlaceSelected={(formattedLocation) => setLocation(formattedLocation)} />
      <RatingSection onRatingChange={(ratings) => setRatings(ratings)} />
      <AccessibilitySection onSelectionChange={(options) => setAccessibilityOptions(options)} />
      <LimitationsSection onSelectionChange={(options) => setLimitationsOptions(options)} />
      <CommentSection value={comments} onChange={(e) => setComments(e.target.value)} className="mt-8" />
      <button
        onClick={handleSubmit}
        className="self-end px-7 py-2.5 mt-5 text-base whitespace-nowrap rounded-xl bg-[#ACD3E0] shadow-[-2px_2px_3px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mr-2"
      >
        Share
      </button>
    </main>
  );
};

export default ReviewPage;
