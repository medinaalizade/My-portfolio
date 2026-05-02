import React from "react";
import MAmoviesScreen from "../assets/MAmovies.png";

const Projects: React.FC = () => {
    const projects = [
        {
            title: "MAmovies",
            description: "A React-based layout featuring a Top 10 list with custom CSS adjustments.",
            tags: ["React", "CSS"],
            link: "https://medinaalizade.github.io/MA-movies/",
            image: MAmoviesScreen
        },
        //Next projects just remember add here
    ];

    return (
        <section id="projects" className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center text-purple-500">My projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500 transition">
                            <div className="h-48 overflow-hidden bg-zinc-800">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="text-purple-500 hover:underline font-medium">View Case Study →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;