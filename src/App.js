import React from "react";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/resume';
import Project from './components/projects';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App;
