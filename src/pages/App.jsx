// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Map from '../components/Map';
import FilterBar from '../components/FilterBar/FilterBar';
import SearchBar from '../components/SearchBar/SearchBar';
import ReviewPage from '../components/ReviewComponents/ReviewPage';

const App = () => {
  const [studySpots, setStudySpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);
  const [initialCenter, setInitialCenter] = useState({ lat: 49.2827, lng: -123.1207 });
  const [initialZoom, setInitialZoom] = useState(11);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false); // Define filter panel state

  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (window.google) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current);
      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current.getPlace();
        if (place.geometry) {
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          handlePlaceSelected(location);
        }
      });

      fetchStudySpots();
    }
  }, []);

  const handlePlaceSelected = (location) => {
    setInitialCenter(location);
    setInitialZoom(13);
    setIsFilterPanelOpen(true);
  };

  const fetchStudySpots = async () => {
    const spotsCollection = collection(db, 'study_spots');
    const spotSnapshot = await getDocs(spotsCollection);
    const spotList = spotSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStudySpots(spotList);
    setFilteredSpots(spotList);
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Full-screen map */}
      <div className="absolute inset-0">
        <Map
          studySpots={filteredSpots}
          initialCenter={initialCenter}
          initialZoom={initialZoom}
        />
      </div>

      {/* Search bar and Filter panel container */}
      <div className="absolute top-4 left-4 flex flex-col space-y-4">
        <SearchBar inputRef={inputRef} onPlaceSelected={handlePlaceSelected} />
        {isFilterPanelOpen && <FilterBar nearbySpots={filteredSpots} />}
      </div>

      {/* Circular button for adding spots */}
      <div className="absolute top-4 right-4 flex flex-col space-y-4">
        <button onClick={openModal} className="w-12 h-12 bg-blue-500 rounded-full shadow-lg text-white font-semibold">+</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <ReviewPage closeModal={closeModal} /> {/* Pass the closeModal function */}
        </div>
      )}
    </div>
  );
};

export default App;
