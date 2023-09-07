import React from "react";
import "./App.css";
import PageRoutes from "./components/routes";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.js";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <PageRoutes />
      </div>
    </Router>
  );
}

export default App;
