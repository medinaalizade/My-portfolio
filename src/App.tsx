import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <Hero name="Madina Ali-zada" title="Full Stack React Developer" description="I build modern, responsive web applications using React and TypeScript."/>
    </div>
  );
}

export default App;