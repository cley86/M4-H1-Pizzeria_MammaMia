import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* El Home ya es "container-fluid", así que lo dejamos tal cual */}
      <Home />
      <Footer />
    </div>
  );
};

export default App;
