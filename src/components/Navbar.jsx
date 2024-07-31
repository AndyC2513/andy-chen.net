import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

const Navbar = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { duration: 2.5, y: 0, opacity: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <header ref={headerRef} className="header">
      <MagneticButton>
        <NavLink to="/">
          <p className="mt-1 font-bold">Home</p>
        </NavLink>
      </MagneticButton>

      <nav className="mt-1 flex gap-5 font-bold">
        <MagneticButton>
          <NavLink to="/about">
            <p>About</p>
          </NavLink>
        </MagneticButton>
        <MagneticButton>
          <NavLink to="/projects">
            <p>Projects</p>
          </NavLink>
        </MagneticButton>
        <MagneticButton>
          <NavLink to="/contact">
            <p>Contact</p>
          </NavLink>
        </MagneticButton>
      </nav>
    </header>
  );
};

export default Navbar;
