import React from "react";

function PrimaryButton({
  label,
  onClick = () => {},
  className = "",
  style = {},
}) {
  const finalClass = `
    bg-gradient-to-l from-[#68246D] to-[#EE00FF]
    bg-[length:200%_100%] bg-[position:right_center]
    hover:bg-[position:left_center]
    transition-[background-position] duration-500 ease-in-out
    px-6 py-2 md:px-8 md:py-3 font-Saira font-bold rounded-lg text-white
    ${className}
  `;

  return (
    <button
      type="button"
      className={finalClass}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
