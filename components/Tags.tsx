import React from 'react'

interface TagsProps {
    tags: string[];
}

export default function Tags({ tags }: TagsProps) {
    // Define possible background and text color classes
    const colors = [
        { bg: "bg-yellow-400", text: "text-yellow-800" },
        { bg: "bg-lime-400", text: "text-lime-800" },
        { bg: "bg-cyan-400", text: "text-cyan-800" },
        { bg: "bg-fuchsia-400", text: "text-fuchsia-800" },
        { bg: "bg-red-400", text: "text-red-800" },
        { bg: "bg-teal-400", text: "text-teal-800" },
        { bg: "bg-orange-400", text: "text-orange-800" },
    ];

    // Function to shuffle the colors array
    function shuffleArray(arr: any[]) {
        let shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
        }
        return shuffled;
    }

    // Shuffle the colors once before rendering
    const shuffledColors = shuffleArray(colors);

    return (
        <>
            {
                tags.map((tag, index) => {
                    const color = shuffledColors[index % shuffledColors.length];
                    return (
                        <span className={`px-3 py-2 ${color.bg} ${color.text} text-[10px] lg:text-xs rounded-full font-medium`}>
                            {tag}
                        </span>
                    );
                })
            }
        </>
    );
}
