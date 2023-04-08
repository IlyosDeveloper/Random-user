import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [mode, setMode] = useState(
    String(localStorage.getItem("mode")).toLowerCase() === "true"
  );
  localStorage.setItem("mode", mode);

  return (
    <div className={`App ${mode ? "dark-mode" : ""}`}>
      <Router>
        <Header mode={mode} setMode={setMode} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
