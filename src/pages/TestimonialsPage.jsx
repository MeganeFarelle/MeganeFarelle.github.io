import { Feedbacks, StarsCanvas } from "../components";

const TestimonialsPage = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Feedbacks />
      <div className="relative z-0">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default TestimonialsPage;
