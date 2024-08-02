import React, { useEffect } from "react";
import { skills } from "../constant";
import Footer from "../components/Footer";

const About = ({ setExplored }) => {
  useEffect(() => {
    setExplored(true);
  }, []);

  return (
    <div>
      <section className="main-container lg:h-screen">
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

        <div className="w-full flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7;">
          <h1 className="text-3xl font-bold text-center text-black mb-10">
            Looking for my Resume?
          </h1>
          <a href="/Resume.pdf" download className="btn lg:ml-11 mb-10">
            Download
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
