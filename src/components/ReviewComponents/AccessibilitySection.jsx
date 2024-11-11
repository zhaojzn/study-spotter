import { useState } from "react";

const AccessibilitySection = ({ onSelectionChange }) => {
  const [options, setOptions] = useState([
    { label: "Wheelchair accessible entrance", isSelected: false },
    { label: "Wheelchair accessible bathroom", isSelected: false },
    { label: "Handicap parking", isSelected: false },
    { label: "Wheelchair accessible seating", isSelected: false },
    { label: "Elevators", isSelected: false },
  ]);

  const handleButtonClick = (index) => {
    const newOptions = [...options];
    newOptions[index].isSelected = !newOptions[index].isSelected;
    setOptions(newOptions);
    onSelectionChange(newOptions.filter(option => option.isSelected).map(option => option.label));
  };

  return (
    <section>
      <h2 className="mt-10 text-2xl text-zinc-800">Was it accessible?</h2>
      <p className="text-base text-slate-400">(Select all that apply)</p>
      <div className="flex flex-wrap gap-2 mt-5 text-base text-zinc-800">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`px-1.5 py-1.5 rounded-xl border-2 ${option.isSelected ? "bg-[#ACD3E0] border-[#7199A7]" : "bg-[#EBE1DA] border-transparent"} shadow-[-2px_2px_3px_rgba(0,0,0,0.25)]`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AccessibilitySection;
