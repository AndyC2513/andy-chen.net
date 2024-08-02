import React, { useEffect } from "react";
import { skills } from "../constant";
import Footer from "../components/Footer";
import Lenis from 'lenis'

const About = ({ setExplored }) => {
  useEffect(() => {
    setExplored(true);
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <div className="h-screen">
      <section className="main-container h-[100vh]">
        <h1 className="text-5xl font-bold text-start text-black">About Me</h1>
        <p className="lg:text-xl text-sm text-start text-black mt-5">
          Here are some of my familiar tech-stacks that I have worked with in
          the past. I am always eager to learn new technologies and frameworks.
        </p>

        <div className="mt-16 flex flex-wrap gap-10">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="object-contain w-3/4 h-3/4 md:w-max md:h-max lg:mx-1 transition-transform duration-300 ease-in-out transform hover:scale-125"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
