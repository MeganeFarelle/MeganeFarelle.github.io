import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, isFr }) => {
  const title  = isFr && experience.title_fr  ? experience.title_fr  : experience.title;
  const points = isFr && experience.points_fr ? experience.points_fr : experience.points;

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1a0030", color: "#fff", border: "1px solid rgba(105,9,215,0.3)" }}
      contentArrowStyle={{ borderRight: "7px solid #6909D7" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, border: "2px solid #6909D7" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-bold">{title}</h3>
        <p className="text-[#F56CEE] text-[15px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language.startsWith("fr");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("experience.subText")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("experience.title")}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} isFr={isFr} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
