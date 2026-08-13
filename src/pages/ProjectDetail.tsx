import { useParams, Link } from 'react-router-dom';
import '../styles/ProjectDetail.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: string;
  technologies: string[];
  link?: string;
}

const projectsData: Record<string, Project> = {
  '1': {
    id: '1',
    title: 'AuditR',
    description: 'A .NET + React app for running user access reviews across applications in an organisation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['.NET', 'React', 'Security'],
    details: `
      AuditR streamlines user access reviews across an organisation's applications. It gives
      reviewers a single place to see who has access to what, and to approve or revoke that access.

      Key Features:
      • Centralised view of user access across multiple applications
      • Review campaigns with assignable reviewers
      • Approve / revoke workflows with an audit trail
      • Role-based access control
      • Reporting and export for compliance

      Built with a .NET backend and a React frontend, AuditR focuses on making periodic access
      reviews fast, traceable, and painless for both reviewers and administrators.
    `,
    technologies: ['.NET', 'C#', 'React', 'TypeScript', 'SQL Server', 'Entity Framework'],
    link: 'https://example.com'
  },
  '2': {
    id: '2',
    title: 'SocialActivities',
    description: 'A social media web app built on .NET Core and React.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=400&fit=crop',
    tags: ['.NET Core', 'React', 'SignalR'],
    details: `
      SocialActivities is a social media web application where users can create, discover, and
      join activities with other people.

      Key Features:
      • Create and manage activities with dates, venues, and categories
      • Follow other users and build a social graph
      • Real-time comments and updates
      • Photo uploads and user profiles
      • Attendance tracking for each activity

      The app is built on .NET Core following clean architecture principles, with a React
      frontend and real-time features powered by SignalR.
    `,
    technologies: ['.NET Core', 'C#', 'React', 'TypeScript', 'SignalR', 'PostgreSQL'],
    link: 'https://example.com'
  },
  '3': {
    id: '3',
    title: 'Flicker',
    description: 'A mouse training web app to sharpen your aim and precision.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Canvas'],
    details: `
      Flicker is a mouse training web app designed to improve aim, reaction time, and precision
      through fast-paced target practice.

      Key Features:
      • Multiple training modes with varying target sizes and speeds
      • Reaction time and accuracy tracking
      • Score history to visualise improvement over time
      • Configurable difficulty settings
      • Minimal, distraction-free interface

      Flicker was built as a fun way to explore browser rendering performance and precise
      input handling, while helping users level up their mouse control.
    `,
    technologies: ['React', 'TypeScript', 'HTML Canvas', 'CSS Animations', 'Vite'],
    link: 'https://example.com'
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="error-state">
          <h2>Project not found</h2>
          <Link to="/" className="back-link">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      {/* Header */}
      <header className="project-detail-header">
        <Link to="/" className="back-link">← Back to Portfolio</Link>
      </header>

      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-content">
          <div className="project-hero-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-hero-text">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                View Live Project →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="project-details">
        <div className="details-container">
          <div className="details-main">
            <h2>Project Overview</h2>
            <div className="project-description">
              {project.details.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index}>{paragraph.trim()}</p>
                )
              ))}
            </div>
          </div>

          <aside className="details-sidebar">
            <div className="sidebar-card technologies-card">
              <h3>Technologies</h3>
              <div className="tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-card tags-card">
              <h3>Skills</h3>
              <div className="tags-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA Section */}
      <section className="project-cta">
        <h2>Interested in working together?</h2>
        <p>Let's create something amazing</p>
        <button className="cta-button">Get In Touch</button>
      </section>

      {/* Footer */}
      <footer className="project-footer">
        <div className="footer-content">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
