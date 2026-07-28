import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SpaRedirectHandler = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("p");
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, []);
  return null;
};

import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import ResumePage from "./pages/ResumePage";
import LinksPage from "./pages/LinksPage";

const HomePage = () => (
  <div className="relative z-0">
    {/* Stars background — fixed behind everything */}
    <StarsCanvas />

    {/* Hero */}
    <div id="hero">
      <Hero />
    </div>

    {/* About + Experience + Tech */}
    <div id="about">
      <About />
      <Experience />
      <Tech />
    </div>

    {/* Work / Projects */}
    <div id="work">
      <Works />
    </div>

    {/* Testimonials */}
    <div id="testimonials">
      <Feedbacks />
    </div>

    {/* Contact + Footer */}
    <div id="contact">
      <Contact />
      <Footer />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <SpaRedirectHandler />
      {/* Mesh gradient background — fixed, covers full viewport */}
      <div className="mesh-gradient-bg" />

      <div className="relative z-0 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* CV masqué temporairement (28/07/2026) — restaurer la ligne ResumePage pour le réafficher */}
          <Route path="/resume" element={<Navigate to="/" replace />} />
          {/* <Route path="/resume" element={<ResumePage />} /> */}
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
