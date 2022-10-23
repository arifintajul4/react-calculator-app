import React from "react";
import NumberScreen from "./components/NumberScreen";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Keypad from "./components/Keypad";

function App() {
  const [numberOne, setNumberOne] = React.useState("0");
  const [numberTwo, setNumberTwo] = React.useState("0");
  const [operator, setOperator] = React.useState("");

  return (
    <div className="bg-dstd-blue-bg min-h-screen flex justify-center items-center">
      <div className="md:w-[400px] w-full px-5 md:px-0">
        <ThemeSwitcher />
        <NumberScreen
          numberOne={numberOne}
          numberTwo={numberTwo}
          operator={operator}
        />
        <Keypad
          numberOne={numberOne}
          setNumberOne={setNumberOne}
          numberTwo={numberTwo}
          setNumberTwo={setNumberTwo}
          operator={operator}
          setOperator={setOperator}
        />
      </div>
    </div>
  );
}

export default App;
