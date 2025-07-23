import React from 'react'

function PrimaryButton({ label, onClick = () => {}, className = "" , style = {}  }) {
  const finalClass = ` bg-gradient-purple px-6 py-2  md:px-8 md:py-3 font-Saira font-bold rounded-lg  ${className}`;
  return (
    <button type="button" className={finalClass} onClick={onClick} style={style}>
      {label}
    </button>
  );
}

export default PrimaryButton