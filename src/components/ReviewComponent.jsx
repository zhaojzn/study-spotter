// src/components/ReviewComponent.jsx
import React from 'react';

const ReviewComponent = ({ onClose }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Hello</h2>
        <p>This is a modal window. You can close it by clicking the button below.</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default ReviewComponent;
