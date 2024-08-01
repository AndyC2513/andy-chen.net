import React, { useEffect } from "react";
import { skills } from "../constant";

const About = ({ setExplored }) => {
  useEffect(() => {
    setExplored(true);
  }, []);

  return (
    <section className="main-container h-[100vh]">
      <h1 className="text-5xl font-bold text-start text-black">About Me</h1>
      <p className="lg:text-xl text-sm text-start text-gray-600 mt-5">
        Here are some of my familiar tech-stacks
      </p>

      <div className="mt-16 flex flex-wrap gap-10">
        {skills.map((skill) => (
          <div>
            <div>
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="object-contain mx-1"
              />
            </div>
          </div>
        ))}
      </div>

      // TODO: ADD MASK HOVERING EFFECT
      
    </section>
  );
};

export default About;
