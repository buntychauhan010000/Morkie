import React from "react";

const filters = ["All", "Berachain", "Taiko", "Polygon", "Superchain"];

function NFTFilters({ selected, onChange }) {
  return (
    <div className="flex justify-center lg:justify-end gap-2  sm:px-0">
      {filters.map((chain) => (
        <button
          key={chain}
          onClick={() => onChange(chain)}
          className={`flex-1  py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm rounded-full mb-5 border hover:bg-purple border-purple transition-all duration-300 font-semibold
            ${
              selected === chain
                ? "bg-fuchsia-600 text-white"
                : "bg-transparent"
            }`}
        >
          {chain}
        </button>
      ))}
    </div>
  );
}

export default NFTFilters;
