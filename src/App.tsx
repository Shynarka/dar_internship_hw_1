import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

function App() {
  let birth_date: Date = new Date("2000-06-28");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <User
        name="Shynar"
        lastname="Bolatova"
        date_of_birth={birth_date}
        email="bolatova.shynar@gmail.com"
        gender="Female"
      />
    </div>
  );
}

export default App;
