import { useState } from "react";
import cloudImage from '../../assets/cloud.svg';

const PhotoUpload = () => {
  const [files, setFiles] = useState([]); // Store the file objects

  const handleFileChange = (event) => {
    if (event.target.files) {
      // Convert the fileList to an array and update the state
      const newFiles = Array.from(event.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleFileDelete = (fileName) => {
    // Filter out the file that was deleted by matching its name
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <section className="flex flex-col gap-3.5 mt-8 w-full">
      <h2 className="text-2xl text-zinc-800">Upload Photos:</h2>
      
      {/* File input button */}
      <label
        htmlFor="fileUpload"
        className="flex gap-2 self-start px-3.5 py-1.5 text-base text-gray-600 rounded-xl shadow-[-2px_2px_3px_rgba(113,153,167,1)] cursor-pointer"
        style={{ backgroundColor: "#EBE1DA" }}  // Set background color to #EBE1DA
      >
        <span>Add files</span>
        {/* Use the imported cloud image here */}
        <img
          loading="lazy"
          src={cloudImage} // Use your own image
          alt="cloud icon"
          className="object-contain shrink-0 self-start aspect-[1.53] w-[26px]"
        />
      </label>

      {/* File input (hidden) */}
      <input
        type="file"
        id="fileUpload"
        className="sr-only"
        aria-label="Upload photos"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* File names preview with delete option */}
      {files.length > 0 && (
        <div className="mt-2">
          <h3 className="font-medium text-[#7199A7]">Uploaded Files:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-[#7199A7]">{file.name}</span>
                <button
                  type="button"
                  onClick={() => handleFileDelete(file.name)}
                  className="ml-2 text-[#BD4545] hover:text-[#BD4545] transition-colors"
                  aria-label={`Delete ${file.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default PhotoUpload;
