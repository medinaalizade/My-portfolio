import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero name="Madina Ali-zada" title="Full Stack React Developer" description="I build modern, responsive web applications using React and TypeScript."/>
        <About />

      </main>
    </div>
  );
}

export default App;