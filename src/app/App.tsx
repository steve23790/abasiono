// MARKER-MAKE-KIT-INVOKED
import "../styles/index.css";
import { Navbar }         from "./components/Navbar";
import { Hero }           from "./components/Hero";
import { About }          from "./components/About";
import { Skills }         from "./components/Skills";
import { Projects }       from "./components/Projects";
import { Experience }     from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Achievements }   from "./components/Achievements";
import { Contact }        from "./components/Contact";
import { Footer }         from "./components/Footer";

export default function App() {
  return (
    <main style={{ background: "#04070d", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
