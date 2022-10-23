import React from "react";
import Button from "./Button";

const Keypad = ({
  setNumberOne,
  numberOne,
  setOperator,
  operator,
  setNumberTwo,
  numberTwo,
}) => {
  const handleNumberClick = (number) => {
    const tmp = numberOne?.toString()?.slice(0, 1);
    const tmp2 = numberTwo?.toString()?.slice(0, 1);

    if (numberOne?.length < 11 || numberTwo?.length < 11)
      if (operator) {
        setNumberTwo(tmp2 === "0" ? number : numberTwo + number);
      } else {
        setNumberOne(tmp === "0" ? number : numberOne + number);
      }
    else {
      alert("Max number of digits reached");
    }
  };

  const handleDelete = () => {
    if (operator) {
      numberTwo?.length > 0 || numberTwo !== "0"
        ? setNumberTwo(numberTwo.slice(0, -1))
        : setNumberTwo("0");
    } else {
      numberOne?.toString()?.length > 0 || numberOne?.toString() !== "0"
        ? setNumberOne(numberOne?.toString()?.slice(0, -1))
        : setNumberOne("0");
    }
  };

  const handleSetOperator = (op) => {
    if (!operator) {
      setOperator(op);
    }
  };

  const handleSubmission = () => {
    switch (operator) {
      case "+":
        setNumberOne(Number(numberOne) + Number(numberTwo));
        break;
      case "-":
        setNumberOne(Number(numberOne) - Number(numberTwo));
        break;
      case "x":
        setNumberOne(Number(numberOne) * Number(numberTwo));
        break;
      case "/":
        setNumberOne(Number(numberOne) / Number(numberTwo));
        break;
      default:
        break;
    }
    setNumberTwo("0");
    setOperator("");
  };

  return (
    <div className="rounded-lg bg-very-dstd-blue-keypad p-7 grid grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-5 gap-y-6">
        <Button onClick={() => handleNumberClick("7")} variant="white">
          7
        </Button>
        <Button onClick={() => handleNumberClick("8")} variant="white">
          8
        </Button>
        <Button onClick={() => handleNumberClick("4")} variant="white">
          4
        </Button>
        <Button onClick={() => handleNumberClick("5")} variant="white">
          5
        </Button>
        <Button onClick={() => handleNumberClick("1")} variant="white">
          1
        </Button>
        <Button onClick={() => handleNumberClick("2")} variant="white">
          2
        </Button>
        <Button onClick={() => handleNumberClick(".")} variant="white">
          .
        </Button>
        <Button onClick={() => handleNumberClick("0")} variant="white">
          0
        </Button>
        <div className="col-span-2">
          <Button
            onClick={() => {
              setNumberTwo("0");
              setNumberOne("0");
              setOperator("");
            }}
            variant="gray"
          >
            RESET
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 gap-y-6">
        <Button onClick={() => handleNumberClick("9")} variant="white">
          9
        </Button>
        <Button onClick={handleDelete} variant="gray">
          DEL
        </Button>
        <Button onClick={() => handleNumberClick("6")} variant="white">
          6
        </Button>
        <Button onClick={() => handleSetOperator("+")} variant="white">
          +
        </Button>
        <Button onClick={() => handleNumberClick("3")} variant="white">
          3
        </Button>
        <Button onClick={() => handleSetOperator("-")} variant="white">
          -
        </Button>
        <Button onClick={() => handleSetOperator("/")} variant="white">
          /
        </Button>
        <Button onClick={() => handleSetOperator("x")} variant="white">
          x
        </Button>
        <div className="col-span-2">
          <Button onClick={handleSubmission} variant="red">
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Keypad;
