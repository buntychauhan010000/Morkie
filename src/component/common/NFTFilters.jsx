import React from "react";

const filters = ["All", "Berachain", "Taiko", "Polygon", "Superchain"];

function NFTFilters({ selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
      {filters.map((chain) => (
        <button
          key={chain}
          onClick={() => onChange(chain)}
          className={`w-25 py-3 text-sm rounded-full border hover:bg-purple border-purple transition-all duration-300 font-semibold 
    ${
      selected === chain ? "bg-fuchsia-600 text-white" : "bg-transparent "
    }`}
        >
          {chain}
        </button>
      ))}
    </div>
  );
}

export default NFTFilters;
