import React from "react";

const filters = ["All", "Berachain", "Taiko", "Polygon", "Superchain"];

function NFTFilters() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {filters.map((filter) => (
        <button
          key={filter}
          className="w-25 py-3 text-sm rounded-full border hover:bg-purple border-purple transition-all duration-300"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default NFTFilters;
