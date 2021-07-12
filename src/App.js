import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Project/Projects";
import Footer from "./components/Footer/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
    
  );
}

export default App;
