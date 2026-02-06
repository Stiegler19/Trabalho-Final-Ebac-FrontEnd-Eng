// 1. Importações dos componentes
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      {/* O menu fica no topo */}
      <Navbar />

      {/* O main agrupa o conteúdo principal para organização */}
      <main>
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;