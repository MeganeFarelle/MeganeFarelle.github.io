import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const TechIcon = ({ name, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.07, 0.6)}
    className="flex flex-col items-center gap-3 group cursor-default"
  >
    {/* Floating + hover scale wrapper */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2.8 + (index % 5) * 0.25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: (index % 7) * 0.18,
      }}
      whileHover={{ scale: 1.18 }}
      style={{
        filter: "drop-shadow(0 6px 14px rgba(105,9,215,0.28))",
        transition: "filter 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter =
          "drop-shadow(0 8px 24px rgba(245,108,238,0.55))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter =
          "drop-shadow(0 6px 14px rgba(105,9,215,0.28))";
      }}
      className="w-28 h-28"
    >
      {/* Octagon shape */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background: "linear-gradient(145deg, #fff8eb 0%, #e8d8b8 100%)",
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
      >
        <img
          src={icon}
          alt={name}
          className="w-14 h-14 object-contain"
          draggable={false}
        />
      </div>
    </motion.div>

    {/* Label */}
    <p className="text-secondary text-[11px] font-semibold tracking-widest uppercase text-center group-hover:text-white transition-colors duration-300">
      {name}
    </p>
  </motion.div>
);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-12">
      {technologies.map((technology, index) => (
        <TechIcon key={technology.name} index={index} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
