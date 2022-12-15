import React from "react";
import clean from "../../assets/projects/clean.jpg";
import edmy from "../../assets/projects/edmy.jpg";
import phono from "../../assets/projects/clean.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Clean Mate",
      livesite: "https://service-review-1.web.app/",
      github: "https://github.com/AnkonCosta/cleanmate-client-11",
      short_description: "A Cleaning Website",
      description:
        "This is a quiz taking React application where the user can judge their programming knowledge based on the quiz topics we have. The correct answer will throw a success toast, contrastingly, a wrong answer will throw an error toast.",
      image: clean,
    },
    {
      name: "Edmy ",
      livesite: "http://fir-auth-assignment-10.web.app/",
      github: "https://github.com/AnkonCosta/edmy-client-10",
      image: edmy,
    },
    {
      name: "Phono",
      livesite: "https://phono-1.web.app/",
      github: "https://github.com/AnkonCosta/phono-client-12",
      image: phono,
    },
  ];
  return (
    <div id="projects" className="w-10/12 mx-auto my-20">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-[#EA0541]">My Projects</h2>
        <p className="text-white my-5 font-extralight">
          Visit my projects and give your feedback
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 max-w-screen-xl mx-auto">
        {projects.map((project, i) => (
          <div className="  p-2 pt-4 shadow-lg bg-[#1F2125] ">
            <img className="w-80  h-60 mx-auto " src={project.image} alt="" />
            <div className="p-5">
              <h2 className=" text-3xl text-white uppercase my-4">
                {project.name}
              </h2>
              <h2 className=" text-xl text-white my-4">
                {project.short_description}
              </h2>
              <h2 className=" text-lg text-white my-4">
                {project.description}
              </h2>
              <div className="flex justify-around mt-4  text-blue-400">
                <a href={project.livesite} target="_blank">
                  Livesite
                </a>
                <a href={project.github} target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
