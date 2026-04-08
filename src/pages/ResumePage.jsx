import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { StarsCanvas } from "../components";
import { fadeIn, textVariant } from "../utils/motion";

// Place your PDF resume at: public/resume.pdf
const RESUME_PATH = "/resume.pdf";

const ResumePage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <motion.section
        initial="hidden"
        animate="show"
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-28`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("resume.subText")}</p>
          <h2 className={styles.sectionHeadText}>{t("resume.title")}</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="mt-10 flex flex-col gap-6"
        >
          {/* Download button */}
          <a
            href={RESUME_PATH}
            download
            className="self-start inline-flex items-center gap-2 bg-[#915EFF] hover:bg-[#7b4fe0] transition-colors text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M8 12l4 4m0 0l4-4m-4 4V4"
              />
            </svg>
            {t("resume.download")}
          </a>

          {/* PDF preview */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#915EFF]/30 shadow-2xl bg-tertiary">
            <p className="text-secondary text-sm px-4 pt-3 pb-1 font-medium uppercase tracking-wider">
              {t("resume.preview")}
            </p>
            <iframe
              src={`${RESUME_PATH}#toolbar=0`}
              title="Resume Preview"
              className="w-full"
              style={{ height: "80vh" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="hidden w-full h-64 items-center justify-center text-secondary text-center px-4"
            >
              {t("resume.noPreview")}
            </div>
          </div>
        </motion.div>
      </motion.section>

      <div className="relative z-0">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default ResumePage;
