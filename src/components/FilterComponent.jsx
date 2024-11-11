// src/components/FilterComponent.jsx
import React from 'react';

const FilterComponent = ({ onClose }) => {
  return (
    <div className="bg-white shadow-lg w-[300px] h-full p-4 rounded-lg mt-4 ml-4">
      <h2 className="text-2xl font-bold mb-4">Filter Menu</h2>
      <p>This is the filter menu. You can add filter options here later.</p>
      {/* Placeholder content for now */}
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Close
      </button>
    </div>
  );
};

export default FilterComponent;
