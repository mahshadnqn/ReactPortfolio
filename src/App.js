import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
