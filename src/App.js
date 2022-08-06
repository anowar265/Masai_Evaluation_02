import logo from "./logo.svg";
import "./App.css";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { Rentals } from "./Components/Rentals/Rentals";
import { useState } from "react";

function App() {
  const [show, setShow] = useState("true");
  return (
    <div className="App">
      <button
        className="toggleForm"
        onClick={() => {
          setShow(show === "true" ? "false" : "true");
        }}
      >
        {/* Show text Add House or Show Rentals based on state */}
        {show == "true" ? "show the form" : "show the table"}
      </button>
      {/* Show component based on state */}
      {show == "true" ? <Rentals /> : <AddHouse />}
      <br />
    </div>
  );
}

export default App;
