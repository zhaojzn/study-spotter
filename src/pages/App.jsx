// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Map from '../components/Map';

const App = () => {
  const [studySpots, setStudySpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [initialCenter, setInitialCenter] = useState({ lat: 49.2827, lng: -123.1207 }); // Vancouver
  const [initialZoom, setInitialZoom] = useState(11);
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    // Initialize Google Places Autocomplete
    if (window.google) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        bounds: {
          north: 49.378,
          south: 49.002,
          east: -122.422,
          west: -123.224,
        },
        strictBounds: true,
      });

      // Set location and filter markers on search
      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current.getPlace();
        if (place.geometry) {
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          setInitialCenter(location);
          setInitialZoom(13); // Zoom in closer to the selected location
          filterNearbySpots(location);
        }
      });
    }

    // Fetch study spots from Firestore on component mount
    fetchStudySpots();
  }, []);

  // Function to fetch study spots from Firestore
  const fetchStudySpots = async () => {
    const spotsCollection = collection(db, 'study_spots');
    const spotSnapshot = await getDocs(spotsCollection);
    const spotList = spotSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStudySpots(spotList);
    setFilteredSpots(spotList); // Initially show all spots
  };

  // Calculate the distance between two coordinates in km using the Haversine formula
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const R = 6371; // Radius of Earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Filter study spots within 10 km of the specified location
  const filterNearbySpots = (location) => {
    const nearbySpots = studySpots.filter(spot => {
      const distance = calculateDistance(
        location.lat,
        location.lng,
        spot.location.latitude,
        spot.location.longitude
      );
      return distance <= 10; // Only include spots within 10 km
    });
    setFilteredSpots(nearbySpots);
  };

  const handleMarkerClick = (spot) => {
    setSelectedSpot(spot);
    setInitialCenter({ lat: spot.location.latitude, lng: spot.location.longitude });
    setInitialZoom(15); // Zoom in on selected marker
  };

  // Handle map clicks to update location and filter nearby spots
  const handleMapClick = (location) => {
    setInitialCenter(location);
    setInitialZoom(13);
    filterNearbySpots(location);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">StudySpotter</h1>
      
      <div className="relative w-3/4 mb-4">
        <input
          type="text"
          ref={inputRef}
          placeholder="Search in Metro Vancouver"
          className="w-full p-3 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="relative w-full h-full">
        <Map
          studySpots={filteredSpots}
          initialCenter={initialCenter}
          initialZoom={initialZoom}
          selectedSpot={selectedSpot}
          onMarkerClick={handleMarkerClick}
          onMapClick={handleMapClick} // Pass handleMapClick to Map
        />
      </div>

      {selectedSpot && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">{selectedSpot.name}</h2>
          <p>Overall Rating: {selectedSpot.overallRating}</p>
          <button onClick={() => setSelectedSpot(null)} className="mt-2 text-blue-500">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
