import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Process from './components/Process';
// import Services from './components/Services';
import Technologies from './components/Technologies';
// import Industries from './components/Industries';
import PortfolioPage from './components/PortfolioPage';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Hero />
        <About />
        {/* <Process /> */}
        {/* <Services /> */}
        <Technologies />
        {/* <Industries /> */}
        <Skills />
        <PortfolioPage />
        <Contact />
      </div>
  );
}

export default App;