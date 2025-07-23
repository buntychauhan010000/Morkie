import React from 'react'

function Stats() {
  return (
    <div className="flex gap-3 sm:gap-10 mt-10 md:mt-0 justify-center md:justify-start ">
      {/* Stat: NFTs Minted */}
      <div>
        <p className="font-Saira text-2xl sm:text-5xl lg:text-heading-64 font-black">2M+</p>
        <p className="text-xs">NFTs Minted</p>
      </div>

      {/* Stat: Chains with vertical dividers on each side */}
      <div className="flex items-center gap-10">
        <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-[#C300FF] to-transparent"></div>
        <div>
          <p className="font-Saira text-2xl sm:text-5xl lg:text-heading-64 font-black">
            10+
          </p>
          <p className="text-xs">Chanis</p>
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-[#C300FF] to-transparent"></div>
      </div>

      {/* Stat: Community */}
      <div>
        <p className="font-Saira text-2xl sm:text-5xl lg:text-heading-64 font-black">
          500k
        </p>
        <p className="text-xs">Community</p>
      </div>
    </div>
  );
}

export default Stats