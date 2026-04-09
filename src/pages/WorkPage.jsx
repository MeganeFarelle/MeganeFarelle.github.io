import { Works, StarsCanvas } from "../components";

const WorkPage = () => {
  return (
    <div className="relative z-0 min-h-screen">
      <Works />
      <div className="relative z-0">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default WorkPage;
