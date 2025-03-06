import React from 'react'

import Tags from './Tags';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    demo: string;
}

export default function ProjectCard( {title, description, tags, demo}:ProjectCardProps ) {
    return (
        <div className="info-card bg-primary-light-blue text-primary-dark-blue
            flex flex-col gap-3 lg:gap-4 justify-start
            p-3 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                <h3 className="text-lg font-semibold">{ title }</h3>
                <div className="tags flex flex-wrap gap-2 text-[8px] lg:text-xs">
                    <Tags tags={tags} />
                </div>
            </div>
            <p className="text-xs lg:text-base">
                { description }
            </p>
            <button
                className={`w-fit px-5 py-2 rounded-xl text-xs
                    ${ demo ? "text-secondary-light-blue bg-secondary-dark-blue" : "text-gray-500 bg-gray-400"}`}
                disabled={ demo ? false : true}
            >
                DEMO
            </button>
        </div>
    )
}
