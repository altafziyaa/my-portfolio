import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; // ✅ added
import Contact from "./components/Contact";

/* Home Page Component */
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects /> {/* ✅ added */}
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
