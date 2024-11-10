// AddSampleButton.jsx
import React from 'react';
import { collection, addDoc, GeoPoint } from 'firebase/firestore';
import { db } from '../firebase';

const AddSampleButton = () => {
  const addSampleSpot = async () => {
    try {
      // Sample data for testing
      const sampleSpot = {
        name: "UBC",
        location: new GeoPoint(49.26117683478806, -123.24654960535547),
        overallRating: 4.0,
        crowdLevel: 2,
        noiseLevel: 3,
        comfort: 4,
        outletsTables: true,
        atmosphere: "cozy",
        accessibility: true,
      };
      
      const docRef = await addDoc(collection(db, "study_spots"), sampleSpot);
      console.log("Sample spot added with ID: ", docRef.id);
      alert("Sample study spot added!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <button
      onClick={addSampleSpot}
      className="px-4 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      Add Sample Study Spot
    </button>
  );
};

export default AddSampleButton;
