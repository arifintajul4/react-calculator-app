import React from "react";

const NumberScreen = ({ numberOne, operator, numberTwo }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="my-5 overflow-hidden rounded-lg bg-very-dstd-blue-screen text-white py-5 px-7">
      {operator ? (
        <div className="text-right">
          <p className="text-sm">
            {numberWithCommas(numberOne)} {numberTwo !== "0" ? operator : ""}
          </p>
          <h1 className="text-white font-bold text-2xl overflow-hidden">
            {numberTwo !== "0"
              ? `${
                  numberTwo?.toString()?.slice(-1) === "."
                    ? numberWithCommas(numberTwo) + "."
                    : numberWithCommas(numberTwo)
                }`
              : operator}
          </h1>
        </div>
      ) : (
        <h1 className="text-right text-white font-bold text-5xl overflow-hidden">
          {numberOne?.toString()?.slice(-1) === "."
            ? numberWithCommas(numberOne) + "."
            : numberWithCommas(numberOne)}
        </h1>
      )}
    </div>
  );
};

export default NumberScreen;
