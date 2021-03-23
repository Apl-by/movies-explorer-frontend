import "./App.css";
import Header from "../Header/Header";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(location);
  return (
    <div className="app">
      <Header location={location} isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
