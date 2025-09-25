import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectShowcase from "./components/ProjectShowcase";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import VideoBackground from "./components/VideoBackground";

function App() {
  return (
    <div className="App relative">
      <VideoBackground />
      <Navbar />
      <ScrollToTop />
      <main className="main-content relative z-10">
        <Routes>
          <Route path="/" element={<ProjectShowcase />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;