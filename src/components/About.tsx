import React from "react";
import purpleGirl from "../assets/purple-girl.gif";

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                
                {/* TEXT SIDE */}
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-purple-500">About Me</h2>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        I’m a <strong>Full Stack Developer</strong> with a genuine interest in building 
                        applications people enjoy using. I focus on clean code, attention 
                        to detail, and finding simple solutions to complex challenges.
                    </p>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        When I finally close my laptop, you’ll usually find me 
                        <strong> curled up with a good book</strong>. I’m a total bookworm at heart; there’s 
                        nothing quite like getting lost in a new story to reset the brain.
                    </p>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        To keep some balance, I make time for <strong>yoga</strong> every day to stretch out 
                        the "coding back," and I love diving into <strong>video games</strong> when I need 
                        a bit of a thrill. 
                    </p>
                    <p className="pt-4 text-purple-400 font-medium">
                        ✨ As a side hobby, I also <strong>teach English</strong>. I really enjoy 
                        helping people find their voice and reach their goals in a new language.
                    </p>
                </div>

                {/* GIF SIDE */}
                <div className="bg-purple-900/20 border border-purple-500/30 h-80 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img 
                        src={purpleGirl} // Fixed: use curly braces for variables
                        alt="Purple Girl Pixel Art" 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;