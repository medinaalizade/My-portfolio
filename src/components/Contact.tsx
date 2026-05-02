import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="bg-zinc-900/50 border border-purple-500/20 p-12 rounded-3xl backdrop-blur-sm shadow-2xl">
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter">
            Let's <span className="text-purple-500">Connect</span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            I’m currently seeking **remote or on-site Full Stack opportunities** where I can contribute to meaningful projects. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a 
              href="mailto:alizademedina7@gmail.com" 
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-purple-600 rounded-full hover:bg-purple-700 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <span className="mr-2">✉️</span>
              Send a Message
            </a>

            <p className="text-sm text-zinc-500 font-mono mt-4 hover:text-purple-400 transition-colors">
              alizademedina7@gmail.com
            </p>
          </div>

          {/* Social Links Placeholder */}
          <div className="mt-12 pt-10 border-t border-zinc-800 flex justify-center gap-8">
            <a href="https://github.com/medinaalizade" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/medina-alizade-81b03a281" className="text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/medinaali_zade/" className="text-zinc-500 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;