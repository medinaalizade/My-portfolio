import React from "react";

const Skills: React.FC = () => {
    const skillCategories = [
        { title: "Frontend", skills: ["React", "Typescript", "Tailwind CSS", "HTML5/CSS3"] },
        { title: "Backend & Tools", skills: ["Node.js", "Git/GitHub", "Repository Management"] },
        { title: "Soft Skills", skills: ["Leadership", "Time Management", "Tutoring"] },
    ];

    return (
        <section id="skills" className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center text-purple-500 ">Technical Stack</h2>\
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((cat) => (
                        <div key={cat.title} className="p-6 bg-zinc-900 rounder-xl border border-purple-500/20 hover:border-purple-500 transition">
                            <h3 className="text-xl font-bold mb-4 text-white">{cat.title}</h3>
                            <ul className="flex flex-wrap gap-2">
                                {cat.skills.map((skill)=> (
                                    <li key={skill} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills;