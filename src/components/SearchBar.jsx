import React, { useState } from "react";
import { Search } from "lucide-react";

function SearchBar() {
  const [locationValue, setLocationValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(locationValue);
    setLocationValue(null);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location..."
        value={locationValue}
        onChange={(e) => setLocationValue(e.target.value)}
        className="text-md w-full rounded-md bg-white px-2 py-2 text-black placeholder-black/50 outline-none"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-md bg-[#5364d3] px-4 transition-all duration-200 hover:scale-105"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
}

export default SearchBar;
