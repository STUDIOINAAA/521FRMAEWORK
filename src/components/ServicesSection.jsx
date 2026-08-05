import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <h2 className="heading-section">Full Stack Production</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>프리 프로덕션 (Pre-Production)</h3>
            <p>컨셉 기획, 스크립트 작성, 스토리보드 및 캐스팅까지. 완벽한 영상 제작을 위한 탄탄한 기초를 설계합니다.</p>
          </div>
          <div className="service-card">
            <h3>프로덕션 (Production)</h3>
            <p>풍부한 경험을 갖춘 전문 제작팀이 최고급 시네마틱 장비를 활용하여 압도적인 영상미와 섬세한 오디오를 포착합니다.</p>
          </div>
          <div className="service-card">
            <h3>포스트 프로덕션 (Post-Production)</h3>
            <p>편집, 색보정(DI), 사운드 디자인 및 VFX 작업 등 모든 디테일을 다듬어 완성도 높고 강렬한 최종 결과물을 만들어냅니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
