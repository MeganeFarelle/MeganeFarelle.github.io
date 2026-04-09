import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
} from "../assets";

// ── New tech icons (PNG for Three.js 3D balls) ──
import python from "../assets/tech2/py2.png";
import java from "../assets/tech2/java2.png";
import php from "../assets/tech2/php2.png";
import bash from "../assets/tech2/bash2.png";
import nodejsIcon from "../assets/tech2/nodejs.png";
import mongodbIcon from "../assets/tech2/mongodb.png";
import mysql from "../assets/tech2/mysql.png";
import dockerIcon from "../assets/tech2/docker.png";
import gitIcon from "../assets/tech2/git.png";
import github from "../assets/tech2/github.png";
import postman from "../assets/tech2/postman.png";
import aws from "../assets/tech2/aws.png";
import symfony from "../assets/tech2/symfony2.png";
import composer from "../assets/tech2/composer2.png";
import bootstrapIcon from "../assets/tech2/bootstrap.png";
import chartjs from "../assets/tech2/chartjs.png";
import reactIcon from "../assets/tech2/react2.png";
import tailwindIcon from "../assets/tech2/tailwindcss.png";
import aframe from "../assets/tech2/aframe.png";
import threejsIcon from "../assets/tech2/threejs.png";
import wordpressIcon from "../assets/tech2/wordpress.png";
import javascriptIcon from "../assets/tech2/js2.png";

// ── Project images ──
import dev4earth from "../assets/dev4earth.png";
import symfonyBackend from "../assets/symfony-backend.png";
import awsRecognition from "../assets/aws-recognition.png";
import pdfAnonymization from "../assets/pdf-anonymization.png";
import qland from "../assets/qland.png";
import dev4earthWorld from "../assets/dev4earth-world.png";

export const navLinks = [
  { id: "about",        title: "About" },
  { id: "work",         title: "Work" },
  { id: "contact",      title: "Contact" },
];

// ── Services (About section cards) ──
const services = [
  { title: "Full-Stack Developer", icon: web },
  { title: "React & React Native",  icon: mobile },
  { title: "Backend & APIs",        icon: backend },
  { title: "Data & Visualisation",  icon: creator },
];

// ── Technologies ──
const technologies = [
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Python",     icon: python },
  { name: "Java",       icon: java },
  { name: "PHP",        icon: php },
  { name: "Symfony",    icon: symfony },
  { name: "Composer",   icon: composer },
  { name: "Bash",       icon: bash },
  { name: "React",      icon: reactIcon },
  { name: "A-Frame",    icon: aframe },
  { name: "Three.js",   icon: threejsIcon },
  { name: "Node.js",    icon: nodejsIcon },
  { name: "MongoDB",    icon: mongodbIcon },
  { name: "MySQL",      icon: mysql },
  { name: "Docker",     icon: dockerIcon },
  { name: "Git",        icon: gitIcon },
  { name: "GitHub",     icon: github },
  { name: "Postman",    icon: postman },
  { name: "AWS",        icon: aws },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Bootstrap",  icon: bootstrapIcon },
  { name: "Chart.js",   icon: chartjs },
  { name: "WordPress",  icon: wordpressIcon },
];

// ── Experiences ──
const experiences = [
  {
    title: "Full-Stack Developer & Web Visualisation Intern",
    title_fr: "Stagiaire Développement Full-Stack & Visualisation Web",
    company_name: "LIFAT — Université de Tours · Blois, France",
    icon: web,
    iconBg: "#1a0030",
    date: "Mar 2026 – Jun 2026",
    points: [
      "Full-stack development of an interactive and immersive web visualisation platform.",
      "Designed high-performance web interfaces using JavaScript, Three.js, A-Frame and WebGL.",
      "Integrated data via REST APIs and exploited time series data.",
      "Back-end contribution in Python for data processing and statistical analysis.",
      "Collaborated in an Agile team environment.",
    ],
    points_fr: [
      "Développement full-stack d'une plateforme web de visualisation interactive et immersive.",
      "Conception d'interfaces web performantes avec JavaScript, Three.js, A-Frame et WebGL.",
      "Intégration de données via APIs REST et exploitation de séries temporelles.",
      "Contribution back-end en Python pour le traitement et l'analyse statistique des données.",
      "Collaboration en équipe projet en environnement Agile.",
    ],
  },
  {
    title: "Machine Learning & Python Intern",
    title_fr: "Stagiaire Machine Learning & Développement Python",
    company_name: "PRIME Lab — Université de Moncton · Canada",
    icon: backend,
    iconBg: "#1a0030",
    date: "Apr 2025 – May 2025",
    points: [
      "Developed structured Python scripts for research data analysis and processing.",
      "Implemented and experimented with deep learning models on complex datasets.",
      "Handled large and heterogeneous datasets (eye-tracking, imaging).",
    ],
    points_fr: [
      "Développement de scripts Python structurés pour l'analyse et le traitement de données de recherche.",
      "Implémentation et expérimentation de modèles de deep learning sur données complexes.",
      "Manipulation de jeux de données volumineux et hétérogènes (eye-tracking, imagerie).",
    ],
  },
  {
    title: "Data Analyst",
    title_fr: "Data Analyst",
    company_name: "OVA Consulting SARL — Nantes, France",
    icon: creator,
    iconBg: "#1a0030",
    date: "May 2023 – Jul 2024",
    points: [
      "Analysed business needs and proposed appropriate data solutions.",
      "Created analytical dashboards with SQL and Power BI.",
      "Leveraged data insights to support business decision-making.",
    ],
    points_fr: [
      "Analyse de besoins métiers et proposition de solutions data adaptées.",
      "Création de tableaux de bord analytiques avec SQL et Power BI.",
      "Exploitation de données pour l'aide à la décision.",
    ],
  },
];

// ── Testimonials ──
const testimonials = [
  {
    testimonial:
      "Megane delivered an immersive 3D web experience that exceeded all expectations — creative, reliable and fast.",
    name: "Research Supervisor",
    designation: "Professor",
    company: "Université de Tours",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Her Python data pipelines were clean, well-documented and delivered ahead of schedule.",
    name: "Lab Director",
    designation: "PhD Researcher",
    company: "PRIME Lab, Moncton",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "The dashboards Megane built transformed how we read our business data. Excellent work.",
    name: "Operations Manager",
    designation: "COO",
    company: "OVA Consulting",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

// ── Projects (real) ──
const projects = [
  {
    name: "Dev4Earth — Data Storytelling CMS",
    description:
      "A web-based data storytelling CMS to create editorial articles enriched with interactive visualisations, dashboards, and custom themes using a modular and scalable architecture.",
    tags: [
      { name: "React",    color: "brand-text-gradient" },
      { name: "Node.js",  color: "pink-text-gradient" },
      { name: "MongoDB",  color: "green-text-gradient" },
    ],
    image: dev4earth,
    source_code_link: "https://github.com/MeganeFarelle/Environmental-CMS",
  },
  {
    name: "Symfony Advanced Backend Platform",
    description:
      "A backend-focused Symfony project featuring auth, Doctrine ORM, event listeners, API Platform, email verification, and an admin dashboard — built from scratch.",
    tags: [
      { name: "Symfony",    color: "brand-text-gradient" },
      { name: "PHP",        color: "orange-text-gradient" },
      { name: "MySQL",      color: "green-text-gradient" },
    ],
    image: symfonyBackend,
    source_code_link: "https://github.com/MeganeFarelle/projet_recettes",
  },
  {
    name: "AWS Vehicle Recognition Pipeline",
    description:
      "Event-driven vehicle recognition system using AWS Rekognition, S3, Lambda, SQS and SNS — a scalable, serverless cloud architecture for automated label extraction.",
    tags: [
      { name: "AWS",     color: "orange-text-gradient" },
      { name: "Lambda",  color: "pink-text-gradient" },
      { name: "Python",  color: "green-text-gradient" },
    ],
    image: awsRecognition,
    source_code_link: "https://github.com/MeganeFarelle/AWS-RECOGNITION-",
  },
  {
    name: "NLP PDF Anonymization & PII Detection",
    description:
      "NLP-driven system combining transformer models, spaCy and Microsoft Presidio to automatically detect and anonymize sensitive information in French PDF documents.",
    tags: [
      { name: "Python",   color: "brand-text-gradient" },
      { name: "spaCy",    color: "pink-text-gradient" },
      { name: "Presidio", color: "green-text-gradient" },
    ],
    image: pdfAnonymization,
    source_code_link: "https://github.com/yahvya/challenge-hackaton-2024",
  },
  {
    name: "QLand — Quantum Desertification Analysis",
    description:
      "NYU Quantum Hackathon project combining classical ML (Random Forest, SVM) with quantum optimisation (QAOA) to monitor desertification via satellite indicators (NDVI, LST).",
    tags: [
      { name: "Python",  color: "brand-text-gradient" },
      { name: "QAOA",    color: "pink-text-gradient" },
      { name: "ML",      color: "green-text-gradient" },
    ],
    image: qland,
    source_code_link: "https://github.com/ms2176/QLand",
  },
  {
    name: "Dev4Earth World — 3D Climate Experience",
    description:
      "An immersive 3D web experience built with Three.js where users explore a virtual world with character movement, physics, sound and narrative modals on climate data.",
    tags: [
      { name: "Three.js",   color: "brand-text-gradient" },
      { name: "WebGL",      color: "pink-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
    ],
    image: dev4earthWorld,
    source_code_link: "https://github.com/MeganeFarelle/dev4earth-world",
  },
];

export { services, technologies, experiences, testimonials, projects };
