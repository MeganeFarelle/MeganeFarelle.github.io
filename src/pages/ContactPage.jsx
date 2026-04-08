import { Contact, StarsCanvas } from "../components";

const ContactPage = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Contact />
      <div className="relative z-0">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default ContactPage;
