import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/MeganeFarelle",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/megane-demgne/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/meganedemgne",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
  label: "YouTube",
  href: "https://www.youtube.com/@MeggieOnTheStack",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.386.566A2.997 2.997 0 0 0 .502 6.186 31.37 31.37 0 0 0 0 12a31.37 31.37 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.112 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.386-.566a2.997 2.997 0 0 0 2.112-2.12A31.37 31.37 0 0 0 24 12a31.37 31.37 0 0 0-.502-5.814zM9.75 15.568V8.432L15.5 12l-5.75 3.568z"/>
    </svg>
  ),
},
];

const Footer = () => {
  return (
    <footer className="relative mt-10">
      {/* Gradient separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6909D7] to-transparent opacity-60 mb-10" />

      <div className="max-w-7xl mx-auto px-6 pb-12 flex flex-col items-center gap-6">
        {/* Brand name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white font-bold text-xl tracking-wide text-center"
        >
          Designed and Developed by{" "}
          <span className="brand-text-gradient">Megane Farelle Demgne</span>
        </motion.p>

        {/* Social icons */}
        <motion.div
          className="flex gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map(({ label, href, icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full flex items-center justify-center
                         bg-white/5 border border-white/10 text-secondary
                         transition-colors duration-200"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F56CEE";
                e.currentTarget.style.borderColor = "#6909D7";
                e.currentTarget.style.background = "rgba(105,9,215,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.background = "";
              }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <p className="text-secondary/50 text-xs text-center">
          © {new Date().getFullYear()} Mégane Farelle — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
