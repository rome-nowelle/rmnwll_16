// Styles
import './App.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Other Pages
import Resume from './components/resume';
import Project from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';


// Router
import { Routes, Route } from 'react-router-dom';

// App Component
function App() {
  return (
    <div className="App">
      <Header/>
      {/* Pages Routing */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App;
