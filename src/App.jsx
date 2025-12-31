import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; // ✅ added
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";
import GoogleForm from "./components/GoogleForm";

/* Home Page Component */
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects /> {/* ✅ added */}
      <GoogleForm />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
