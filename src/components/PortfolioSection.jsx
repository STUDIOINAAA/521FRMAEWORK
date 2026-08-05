import React, { useState } from 'react';
import './PortfolioSection.css';

const projects = [
  { id: 1, title: 'Midnight City', category: 'Entertainment', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop' },
  { id: 2, title: 'Echoes', category: 'Entertainment', img: 'https://images.unsplash.com/photo-1540656093259-0f4f9f4c3af4?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Neon Pulse', category: 'Campaigns', img: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Wild Hearts', category: 'Brand Film', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop' },
];

const filters = ['All', 'Brand Film', 'Entertainment', 'Campaigns'];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="portfolio section-padding">
      <div className="container">
        <h2 className="heading-section">Works Reel</h2>
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-img" style={{ backgroundImage: `url(${project.img})` }}></div>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <button className="play-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-action">
          <a href="#" className="btn btn-outline">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
