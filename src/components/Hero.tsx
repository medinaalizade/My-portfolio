import React from "react";

type HeroProps = {
    name: string;
    title: string;
    description: string;
};

const Hero: React.FC<HeroProps> = ({ name, title, description }) => {
    return (
        <section id="home" className="relative pt-24 min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>

            <div className="relative text-center max-w-4xl px-8 z-10 animate-fade-in">
                
                {/* Availability Badge */}
                <div className="inline-block px-4 py-1.5 mb-8 border border-purple-500/30 rounded-full bg-purple-500/10">
                    <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">
                       ✨ Available for new projects
                    </span>
                </div>

                <p className="text-gray-400 text-lg md:text-xl mb-4 italic font-light">
                    Hey, I am
                </p>

                <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                    {name}
                </h1>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                    {title}
                </h2>

                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#projects" className="px-8 py-4 bg-purple-600 rounded-xl font-bold hover:bg-purple-700 hover:scale-105 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]" >
                        View My Work
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-purple-500/50 rounded-xl font-bold hover:bg-purple-500/10 hover:border-purple-400 hover:scale-105 transition-all">
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full opacity-50"></div>
            </div>
        </section>
    );
};

export default Hero;