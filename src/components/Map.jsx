// Map.jsx
import React, { useEffect, useRef } from 'react';

const Map = ({ studySpots, onMarkerClick, initialCenter, initialZoom, selectedSpot }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapRef.current && window.google) {
      // Initialize the map with initial center and zoom level
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: initialCenter,
        zoom: initialZoom,
        disableDefaultUI: true,
        zoomControl: true,
      });

      // Add a marker for each study spot
      studySpots.forEach((spot) => {
        const marker = new window.google.maps.Marker({
          position: { lat: spot.location.latitude, lng: spot.location.longitude },
          map: mapInstance.current,
          title: spot.name,
        });

        // Add click listener to each marker
        marker.addListener("click", () => {
          if (onMarkerClick) {
            onMarkerClick(spot);
          }
        });
      });
    }
  }, [studySpots, initialCenter, initialZoom, onMarkerClick]);

  // Re-center and zoom in on the map when a marker is selected
  useEffect(() => {
    if (selectedSpot && mapInstance.current) {
      mapInstance.current.panTo({
        lat: selectedSpot.location.latitude,
        lng: selectedSpot.location.longitude,
      });

      // Zoom in when a marker is clicked
      mapInstance.current.setZoom(15); // Adjust zoom level as desired for close-up view
    }
  }, [selectedSpot]);

  return <div ref={mapRef} className="w-full h-96" />;
};

export default Map;
