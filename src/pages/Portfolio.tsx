import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import ProjectCard from '../components/ProjectCard';
import flickerImage from '../assets/F.png';
import auditRImage from '../assets/AuditR.png';
import socialActivitiesImage from '../assets/SocialActivities.jpg';
import '../styles/Portfolio.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AuditR',
    description: 'A .NET + React app for running user access reviews across applications in an organisation.',
    image: auditRImage
  },
  {
    id: '2',
    title: 'SocialActivities',
    description: 'A social media web app built on .NET Core and React.',
    image: socialActivitiesImage
  },
  {
    id: '3',
    title: 'Flicker',
    description: 'Think your aim is cracked? Jump in and see how many clean headshots you can land under pressure.',
    image: flickerImage
  }
];

const typewriterPhrases = [
  'Turning ideas into software',
  'Pulling things apart and rebuilding them',
  'Crafting digital experiences'
];

function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charCount < phrase.length) {
      timeout = setTimeout(() => setCharCount((c) => c + 1), 75);
    } else if (!deleting && charCount === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charCount > 0) {
      timeout = setTimeout(() => setCharCount((c) => c - 1), 40);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % typewriterPhrases.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [charCount, deleting, phraseIndex]);

  return (
    <span className="typewriter">
      {typewriterPhrases[phraseIndex].slice(0, charCount)}
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
}

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${visible ? ' reveal-visible' : ''}`}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-title">aangsyd</h1>
          <div className="navbar-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Hi I'm Amos</h2>
            <p className="hero-subtitle"><Typewriter /></p>
            <div className="hero-social-links">
              <a href="https://github.com/zinvolle" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="44" height="44" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/amos-ang-3106aa282/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="44" height="44" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <Reveal>
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                I spend too much time wondering how things work and then trying to build them myself. 
                Currently learning, experimenting, and occasionally breaking things along the way.
              </p>
            </div>

            <div className="interests-grid">
              <div className="card interests-card">
                <h3>Interests</h3>
                <ul>
                  <li>DevOps</li>
                  <li>Cloud Computing</li>
                  <li>AI</li>
                  <li>Software Development</li>
                </ul>
              </div>

              <div className="card hobbies-card">
                <h3>Hobbies</h3>
                <ul>
                  <li>Cycling</li>
                  <li>Badminton</li>
                  <li>Hiking</li>
                  <li>Marathons</li>
                </ul>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <Reveal>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
