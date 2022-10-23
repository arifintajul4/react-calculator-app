import React from "react";

const NumberScreen = ({ numberOne, operator, numberTwo }) => {
  return (
    <div className="my-5 overflow-hidden rounded-lg bg-very-dstd-blue-screen text-white py-5 px-7">
      {operator ? (
        <div className="text-right">
          <p className="text-sm">
            {Number(numberOne).toLocaleString()}{" "}
            {numberTwo !== "0" ? operator : ""}
          </p>
          <h1 className="text-white font-bold text-2xl">
            {numberTwo !== "0"
              ? `${
                  numberTwo?.toString()?.slice(-1) === "."
                    ? Number(numberTwo).toLocaleString() + "."
                    : Number(numberTwo).toLocaleString()
                }`
              : operator}
          </h1>
        </div>
      ) : (
        <h1 className="text-right text-white font-bold text-5xl">
          {numberOne?.toString()?.slice(-1) === "."
            ? Number(numberOne).toLocaleString() + "."
            : Number(numberOne).toLocaleString()}
        </h1>
      )}
    </div>
  );
};

export default NumberScreen;
