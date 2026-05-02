import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black w-full flex flex-col">
      <Navbar />
      <main className="w-full">
        <Hero name="Madina Ali-zada" title="Full Stack React Developer" description="I build modern, responsive web applications using React and TypeScript."/>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;