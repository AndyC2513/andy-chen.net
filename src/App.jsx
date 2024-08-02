import "./index.css";
import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Lenis from "lenis";

function App() {
  const [explored, setExplored] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    // Main content
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar setExplored={setExplored} />
        <Routes>
          <Route path="/" element={<Home explored={explored} />} />
          <Route path="/about" element={<About setExplored={setExplored} />} />
          <Route
            path="/contact"
            element={<Contact setExplored={setExplored} />}
          />
          <Route
            path="/projects"
            element={<Projects setExplored={setExplored} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
