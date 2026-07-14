import React from "react";
import MAmoviesScreen from "../assets/MAmovies.png";
import TaskMasterScreen from "../assets/Task_Manager.png"

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Task Master",
            description: "A full-stack todo application featuring a React frontend with glassmorphism design, dark mode, progress tracking, and a Node.js/Express backend with MongoDB Atlas integration.",
            tags: ["React", "Node.js", "Express", "MongoDB", "REST API", "Full-Stack"],
            link: "https://task-master-52ry.onrender.com/",
            image: TaskMasterScreen,
            status: "Completed"
        },
        {
            title: "MAmovies",
            description: "A premium movie web application integrating TMDB API data streams, dynamic routing, and an immersive glassmorphism media details layer.",
            tags: ["React", "CSS", "Axios", "REST API"],
            link: "https://medinaalizade.github.io/MA-movies/",
            image: MAmoviesScreen,
            status: "Completed"
        },
        {
            title: "MAstore",
            description: "A highly responsive minimalist clothing e-commerce store utilizing DummyJSON collections, global cart contexts, and multi-tier sidebar filters.",
            tags: ["React", "TypeScript", "Tailwind CSS", "Context API"],
            link: "#", 
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
            status: "Coming Soon"
        },
        {
            title: "Next Big Project",
            description: "Currently engineering an advanced system architecture to solve complex client-side problems. Implementation details dropping shortly.",
            tags: ["Full-Stack", "Architecture", "Git"],
            link: "#",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
            status: "In Development"
        },
    ];

    // ... rest of your component stays the same
    return (
        <section id="projects" className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center text-purple-500">My projects</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500 transition flex flex-col justify-between">
                            
                            <div>
                                {/* Image and Status Badge Container */}
                                <div className="h-48 overflow-hidden bg-zinc-800 relative">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                    />
                                    {/* Dynamic status badge overlay */}
                                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                                        project.status === "Completed" 
                                            ? "bg-emerald-950/80 text-emerald-400 border-emerald-500/30" 
                                            : "bg-purple-950/80 text-purple-400 border-purple-500/30"
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-widest text-purple-400 font-bold bg-purple-950/30 px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom CTA Link */}
                            <div className="p-6 pt-0">
                                {project.link !== "#" ? (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-purple-500 hover:underline font-medium inline-flex items-center gap-1">
                                        View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                ) : (
                                    <span className="text-zinc-600 font-medium cursor-not-allowed italic">
                                        Case Study Locked
                                    </span>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;