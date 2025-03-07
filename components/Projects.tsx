"use client";

import React from 'react'
import { useEffect, useState } from "react";

import Tags from './Tags';

interface Project {
    title: string;
    description: string;
    tags: string[];
    demo: string;
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/data/projects.json")
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (

        <div className="flex flex-col gap-2">
            {
                projects.map((project) => (
                    <div className="info-card bg-primary-light-blue text-primary-dark-blue
                        flex flex-col gap-3 lg:gap-4 justify-start
                        p-3 lg:p-8">
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                            <h3 className="text-lg font-semibold">{ project.title }</h3>
                            <div className="tags flex flex-wrap gap-2 text-[8px] lg:text-xs">
                                <Tags tags={project.tags} />
                            </div>
                        </div>
                        <p className="text-xs lg:text-base">
                            { project.description }
                        </p>
                        <button
                            className={`w-fit px-5 py-2 rounded-xl text-xs
                                ${ project.demo ? "text-secondary-light-blue bg-secondary-dark-blue" : "text-gray-500 bg-gray-400"}`}
                            disabled={ project.demo ? false : true}
                        >
                            DEMO
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
