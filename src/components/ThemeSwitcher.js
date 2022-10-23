import React from "react";

const ThemeSwitcher = () => {
  const [selectedTheme, setSelectedTheme] = React.useState("dark");

  const handleClick = () => {
    if (selectedTheme === "dark") {
      setSelectedTheme("light");
    } else if (selectedTheme === "light") {
      setSelectedTheme("neon");
    } else {
      setSelectedTheme("dark");
    }
  };

  return (
    <div className="text-white flex justify-between items-center">
      <p className="font-bold text-3xl">calc</p>
      <div className="flex items-end gap-2">
        <p className="font-bold text-xs">THEME</p>
        <div>
          <div className="flex justify-evenly">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div
            onClick={() => handleClick()}
            className="h-4 rounded bg-very-dstd-blue-keypad py-2 flex items-center gap-2 px-1 cursor-pointer"
          >
            <div
              className={`h-3 w-3 rounded-full ${
                selectedTheme === "dark" ? "bg-red" : ""
              }`}
            />
            <div
              className={`h-3 w-3 rounded-full ${
                selectedTheme === "light" ? "bg-red" : ""
              }`}
            />
            <div
              className={`h-3 w-3 rounded-full ${
                selectedTheme === "neon" ? "bg-red" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
