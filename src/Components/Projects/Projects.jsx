import React, { useState, useRef, useEffect } from 'react'
import projects_data from '../../assets/projects_data'
import './Projects.css'

const Projects = () => {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const cardRefs = useRef([]);
  const expandedSectionRefs = useRef([]);

  // Scroll into view when expanding
  useEffect(() => {
    if (expandedIdx !== null) {
      const isMobile = window.innerWidth <= 700;
      if (isMobile && expandedSectionRefs.current[expandedIdx]) {
        expandedSectionRefs.current[expandedIdx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (cardRefs.current[expandedIdx]) {
        cardRefs.current[expandedIdx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [expandedIdx]);

  const handleCardClick = idx => {
    if (expandedIdx === idx) {
      // Scroll first, then collapse after a short delay
      if (cardRefs.current[idx]) {
        cardRefs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => setExpandedIdx(null), 350); // 350ms for smooth scroll
      } else {
        setExpandedIdx(null);
      }
    } else {
      setExpandedIdx(idx);
    }
  };

  return (
    <div id='projects' className="projects">
      <div className="global-section-title-box">
        <h1 className="global-title writing-title">Projects</h1>
      </div>

      <div className="projects-list">{projects_data.map((project, idx) => (
          <div className={`project-card${expandedIdx === idx ? ' expanded' : ''}`} key={idx} onClick={() => handleCardClick(idx)} tabIndex={0} style={{cursor:'pointer'}} ref={el => cardRefs.current[idx] = el}>
              {project.project_cover_img ? (
                <div className="project-card-img-box">
                  <img src={project.project_cover_img} alt={project.project_name + ' cover'} className="project-card-img" />
                </div>
              ) : (
                <div className="project-card-img-box" />
              )}
              <div className="project-card-content">
              <h2 className="project-name">{project.project_name}</h2>
              <div className="project-role">{project.project_role}</div>
              <div className="project-status">{project.project_status}</div>
              <div className="project-tagline">{project.project_tagline}</div>
              <div className='project-tech-row'>
                {project.project_technologies && project.project_technologies.split(',').map((tech, i) => (
                  <span className="project-tech-tag" key={i}>{tech.trim()}</span>
                ))}
              </div>
              
              {/* Expanded content */}
              {expandedIdx === idx && (
                  <div className="project-expanded" ref={el => expandedSectionRefs.current[idx] = el}>
                    {project.project_expanded_img_1 && (
                      <figure className="project-expanded-img-figure">
                        <img src={project.project_expanded_img_1} alt={project.project_name + ' expanded 1'} className="project-expanded-img" />
                        {project.project_expanded_img_1_caption && <figcaption className="project-expanded-img-caption">{project.project_expanded_img_1_caption}</figcaption>}
                      </figure>
                    )}
                    <div className="project-expanded-section">
                      <div className="project-expanded-heading">The Idea</div>
                      <div className="project-expanded-body">{project.project_expanded_idea}</div>
                    </div>
                    <div className="project-expanded-section">
                      <div className="project-expanded-heading">My Role</div>
                      <div className="project-expanded-body">{project.project_expanded_role}</div>
                    </div>
                    {project.project_expanded_img_2 && (
                      <figure className="project-expanded-img-figure">
                        <img src={project.project_expanded_img_2} alt={project.project_name + ' expanded 2'} className="project-expanded-img" />
                        {project.project_expanded_img_2_caption && <figcaption className="project-expanded-img-caption">{project.project_expanded_img_2_caption}</figcaption>}
                      </figure>
                    )}
                    <div className="project-expanded-section">
                      <div className="project-expanded-heading">My Approach</div>
                      <div className="project-expanded-body">{project.project_expanded_approach1}</div>
                      {project.project_expanded_approach2 && <div className="project-expanded-body">{project.project_expanded_approach2}</div>}
                    </div>
                    {project.project_expanded_img_3 && (
                      <figure className="project-expanded-img-figure">
                        <img src={project.project_expanded_img_3} alt={project.project_name + ' expanded 3'} className="project-expanded-img" />
                        {project.project_expanded_img_3_caption && <figcaption className="project-expanded-img-caption">{project.project_expanded_img_3_caption}</figcaption>}
                      </figure>
                    )}
                    <div className="project-expanded-section">
                      <div className="project-expanded-heading">The Outcome</div>
                      <div className="project-expanded-body">{project.project_expanded_outcome}</div>
                    </div>
                  </div>
              )}
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects