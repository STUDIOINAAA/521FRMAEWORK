import React, { useState } from 'react';
import './PortfolioSection.css';

const projects = [
  { id: 1, title: 'FC Online Documentary - Road to FC PRO EP02', category: 'Entertainment', videoId: 'ISha1MuD8iQ' },
  { id: 2, title: 'FC Online Documentary - Road to FC PRO EP01', category: 'Entertainment', videoId: '9-71G6mjIfM' },
  { id: 3, title: '김성령배우 써마지 메이킹필름', category: 'Brand Film', videoId: 'Wb3_XvBxweA' },
  { id: 4, title: '2026 BYD 워터밤서울 스케치', category: 'Brand Film', videoId: 'VLA5dd7hHnE' },
  { id: 5, title: '뉴트리원 X 이병헌 메이킹 필름', category: 'Brand Film', videoId: 'T6PVm7Uh1lE' },
  { id: 6, title: '인천국제공항 25주년', category: 'Campaigns', videoId: 'bKGUM-XkaNQ' },
  { id: 7, title: 'LH 복합문화공간 - 계양 스케치', category: 'Campaigns', videoId: 'pM0_9XD1dPY' },
  { id: 8, title: 'LH 낙동아트센터 개관 홍보영상', category: 'Campaigns', videoId: 'PXCOl-03Ut4' },
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
            <a
              key={project.id}
              className="portfolio-item"
              href={`https://www.youtube.com/watch?v=${project.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="portfolio-img"
                style={{ backgroundImage: `url(https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg)` }}
              ></div>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <span className="play-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </span>
              </div>
            </a>
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
