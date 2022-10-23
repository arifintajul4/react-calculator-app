import React from "react";

const Button = ({ children, variant, onClick }) => {
  const buttonType = {
    white: "bg-grayish-orange-light text-grayish-blue shadow-btn-orange",
    gray: "bg-dstd-blue-bg text-white shadow-btn-blue",
    red: "bg-red text-white shadow-btn-red",
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded-lg z-[10] relative md:text-2xl text-xl font-bold w-full py-2 ${buttonType[variant]} transform active:translate-y-[4px]`}
    >
      {children}
    </button>
  );
};

export default Button;
