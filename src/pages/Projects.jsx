import React, { useEffect } from "react";
import Footer from "../components/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projects } from "../constant";
import MagneticButton from "../components/MagneticButton";

// Projects page
const Projects = ({ setExplored }) => {
  useEffect(() => {
    setExplored(true);
  }, []);

  return (
    <div>
      <section className="main-container">
        <h1 className="text-5xl font-bold text-start text-black">
          Personal Projects
        </h1>
        <p className="lg:text-xl text-sm text-start text-black mt-5">
          I've built and led numerous projects in the past. Here are some of my
          personal projects that I have worked on, all of which are open-source.
          Click the icon to check them out!
        </p>

        <div className="mt-12">
          <VerticalTimeline>
            {projects.map((project) => (
              <VerticalTimelineElement
                key={project.title}
                date={project.date}
                iconStyle={{ background: project.iconBg }}
                icon={
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex justify-center items-center w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-125">
                      <MagneticButton>
                        <img
                          src={project.icon}
                          alt={project.title}
                          className="w-[60%] h-[60%] object-contain"
                        />
                      </MagneticButton>
                    </div>
                  </a>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: project.iconBg,
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {project.title}
                  </h3>
                  <p
                    className="text-black font-sans font-base"
                    style={{ margin: 0 }}
                  >
                    {project.techstacks}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {project.points.map((point, index) => (
                    <li
                      key={`project-point-${index}`}
                      className="text-slate-500 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
