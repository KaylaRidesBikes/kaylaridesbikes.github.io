import './css/projectcard.css';

function ProjectCard({ image, title, description, date, link }) {
  return (
    
      <div className="project-card">
        <a
          href={link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
        <img src={image} alt={title} loading="lazy" className="project-image" />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="project-date">{date}</span>
        </div>
        
        </a>
      </div>
  );
}

export default ProjectCard;