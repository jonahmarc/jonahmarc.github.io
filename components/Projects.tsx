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

function getYouTubeEmbedUrl(url: string): string {
    // handles youtu.be/ID and youtube.com/watch?v=ID
    const match = url.match(/(?:youtu\.be\/|[?&]v=)([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function Projects({ limit }: { limit?: number }) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [activeDemo, setActiveDemo] = useState<Project | null>(null);

    useEffect(() => {
        fetch("/data/projects.json")
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // close on Escape
    useEffect(() => {
        if (!activeDemo) return;
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveDemo(null); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [activeDemo]);

    const displayed = limit ? projects.slice(0, limit) : projects;

    return (
        <>
        <div className="flex flex-col gap-2">
            {
                displayed.map((project, index) => (
                    <div key={index} className="info-card bg-primary-light-blue text-primary-dark-blue
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
                            onClick={() => project.demo && setActiveDemo(project)}
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

        {activeDemo && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                onClick={() => setActiveDemo(null)}
            >
                <div
                    className="relative w-full max-w-2xl bg-black rounded-xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between px-4 py-2 bg-primary-dark-blue">
                        <span className="text-sm font-semibold text-secondary-light-blue truncate">
                            {activeDemo.title}
                        </span>
                        <button
                            onClick={() => setActiveDemo(null)}
                            className="text-secondary-light-blue hover:text-white text-xl leading-none ml-4"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="aspect-video w-full">
                        <iframe
                            src={getYouTubeEmbedUrl(activeDemo.demo)}
                            title={activeDemo.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
