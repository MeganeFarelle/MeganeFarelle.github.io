import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Hero, StarsCanvas } from "./components";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

const HomePage = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero />
    </div>
    <div className="relative z-0">
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
