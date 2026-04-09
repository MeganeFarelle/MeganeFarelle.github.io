import { About, Experience, Tech, StarsCanvas } from "../components";

const AboutPage = () => {
  return (
    <div className="relative z-0 min-h-screen">
      <About />
      <Experience />
      <Tech />
      <div className="relative z-0">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default AboutPage;
