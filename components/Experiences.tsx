"use client";

import React from 'react'
import { useEffect, useState } from "react";

import Tags from './Tags';

interface Experience {
    title: string;
    duration: string;
    company: string;
    description: string[];
    tags: string[];
}

export default function Experiences() {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        fetch("/data/experiences.json")
        .then((res) => res.json())
        .then((data) => setExperiences(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (

        <div className="flex flex-col gap-2">
            {
                experiences.map((experience, index) => (
                    <div key={index} className="info-card bg-primary-light-blue text-primary-dark-blue
                        flex flex-col gap-3 lg:gap-4 justify-start
                        p-3 lg:p-8">
                        <div className="flex flex-row lg:flex-row gap-2 lg:gap-5">
                            <h3 className="text-lg font-semibold">{ experience.title }</h3>
                        </div>
                        <ul className='list-disc ml-5 text-xs lg:text-base'>
                            { experience.description.map((duties, index) => (
                                <li key={index}>{ duties }</li>
                            )) }
                        </ul>
                        <div className="tags flex flex-wrap gap-2 text-[8px] lg:text-xs">
                            <Tags tags={experience.tags} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
