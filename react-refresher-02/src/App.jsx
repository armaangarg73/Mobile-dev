import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [blueMode, setBlueMode] = useState(false);
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setBlueMode(false); // turn off blue mode
  };

  const blueToggleTheme = () => {
    setBlueMode(!blueMode);
    setDarkMode(false); // turn off dark mode
  };

  //1. without dependency array

  // useEffect(() => {
  //   console.log("Runs on every render");
  // });

  //2. with empty dependency array

  // useEffect(() => {
  //   console.log("Hello from useEffect");
  // }, []);

  // 3. with dependency array
  useEffect(() => {
    console.log("Hello from useEffect");
  }, [count, toggleTheme]);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: blueMode
          ? "#0f48a4"
          : darkMode
            ? "#121212"
            : "#ffffff",

        color: darkMode || blueMode ? "#ffffff" : "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
    >
      <h1>{blueMode ? "Blue Mode" : darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Toggle Dark Theme
      </button>

      <button
        onClick={blueToggleTheme}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Toggle Blue Theme
      </button>

      <h1>Count: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Increment Count
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Decrement Count
      </button>
    </div>
  );
}

export default App;
