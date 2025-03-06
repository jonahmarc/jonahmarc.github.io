"use client";

import { useEffect, useState } from "react";

import AppLayout from "@/components/AppLayout";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  demo: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <AppLayout>
      <div className="flex flex-col gap-10">
        <div className="welcome-text
            flex flex-col gap-2
            w-full">
          <h2 className="text-xl">Hi There</h2>
          <h1 className="text-4xl font-bold">I am <span className="text-secondary-light-blue">Jonah Marc</span></h1>
          <h2 className="text-2xl">I am a software developer</h2>
          {/* <p className="text-sm font-light mt-5">
            I am currently building my portfolio, focusing on full-stack web development, including testing and deployment.
          </p> */}
        </div>
        <div className="recent-projects
            flex flex-col gap-2
            w-full">
          <h2 className="text-2xl font-bold">Recent <span className="text-secondary-light-blue">Projects</span></h2>
          <div className="flex flex-col gap-2">
            {
              projects.map((project) => (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  demo={project.demo}
                />
              ))
            }
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
