import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { StarsCanvas } from "../components";
import { fadeIn, textVariant } from "../utils/motion";
import Footer from "../components/Footer";

const ResumePage = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language.startsWith("fr");
  const RESUME_PATH = isFr ? "/resume.pdf" : "/resume-en.pdf";

  return (
    <div className="relative z-0 min-h-screen flex flex-col">
      {/* Stars background */}
      <StarsCanvas />

      {/* Mesh gradient */}
      <div className="mesh-gradient-bg" />

      {/* Content */}
      <motion.section
        initial="hidden"
        animate="show"
        className={`${styles.padding} max-w-5xl mx-auto w-full relative z-10 pt-28 flex-1`}
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
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={RESUME_PATH}
              download="CV_Megane_Farelle.pdf"
              className="inline-flex items-center gap-2 brand-gradient text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M8 12l4 4m0 0l4-4m-4 4V4" />
              </svg>
              {t("resume.download")}
            </a>

            {/* Language note */}
            <span className="text-secondary text-sm italic">{t("resume.langNote")}</span>
          </div>

          {/* PDF preview */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#6909D7]/40 shadow-2xl">
            <div className="bg-[#1a0030] px-4 py-3 flex items-center justify-between border-b border-[#6909D7]/20">
              <p className="text-secondary text-sm font-medium uppercase tracking-wider">
                {t("resume.preview")}
              </p>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F56CEE] text-xs hover:underline flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {i18n.language.startsWith("fr") ? "Ouvrir dans un nouvel onglet" : "Open in new tab"}
              </a>
            </div>

            <iframe
              src={`${RESUME_PATH}#toolbar=1&navpanes=0&scrollbar=1`}
              title="Resume Preview"
              className="w-full bg-white"
              style={{ height: "82vh" }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
};

export default ResumePage;
