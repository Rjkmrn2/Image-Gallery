import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      searchText(text);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 z-50">
      <div className="max-w-3xl mx-auto">
        <form 
          onSubmit={onSubmit} 
          className="flex items-center bg-gray-100 rounded-full overflow-hidden shadow-sm transition-all focus-within:ring-2 focus-within:ring-teal-400"
        >
          <input
            type="text"
            placeholder="Search high-quality images..."
            className="flex-grow px-6 py-3 text-gray-700 text-lg bg-transparent focus:outline-none"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageSearch;
