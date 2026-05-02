import React from "react";

type HeroProps = {
    name: string;
    title: string;
    description: string;
};

const Hero: React.FC<HeroProps> = ({ name, title, description }) => {
    return (
        <section id="home" className="pt-24 min-h-screen flex item-center justify-center bg-black text-white">
            <div className="text-center max-w-3xl px-8">
                <p className="text-gray-400 mb-2">
                    Hey, I am
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-purple-500 mb-4">
                    {name}
                </h1>
                <h2 className="text-2xl md-text-3xl font-semibold mb-4">
                    {title}
                </h2>
                <p className="text-gray-400 mb-6">
                    {description}
                </p>

                <div className="flex justify-center gap-4">
                    <a href="#projects" className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition" >View Projects</a>
                    <a href="#contact" className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-black transition">Contact Me</a>

                </div>
            </div>
        </section>
    )
}

export default Hero;