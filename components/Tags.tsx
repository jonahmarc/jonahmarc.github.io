import React from 'react'

interface TagsProps {
    tags: string[];
}

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

export default function Tags( { tags }: TagsProps ) {
    return (
        <>
            {
                tags.map((tag, index) => {
                    const randomColor = colors[index % colors.length];
                    return (
                        <span className={`px-3 py-2 ${randomColor.bg} ${randomColor.text} text-[10px] lg:text-xs rounded-full font-medium`}>
                            { tag }
                        </span>
                    );
                })
            }
        </>
    )
}
