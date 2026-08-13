import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ id, title, description, image }: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`} className="project-card-link">
      <div className="project-card">
        <img src={image} alt={title} className="project-card-image" />
        <div className="project-card-overlay">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
}
