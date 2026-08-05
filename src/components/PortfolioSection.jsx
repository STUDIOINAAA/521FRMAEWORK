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
  { id: 9, title: 'DKZ 정컨찌르기 EP.01', category: 'Entertainment', videoId: 'evr_yU9bdHk' },
  { id: 10, title: 'DKZ 정컨찌르기 EP.02', category: 'Entertainment', videoId: 'hpYiRlZwOA0' },
  { id: 11, title: 'DKZ 정컨찌르기 EP.03', category: 'Entertainment', videoId: 'qnrMtJdM3i0' },
  { id: 12, title: 'DKZ 정컨찌르기 EP.04', category: 'Entertainment', videoId: 'MnnGmijd5mo' },
  { id: 13, title: 'DKZ 정컨찌르기 EP.05', category: 'Entertainment', videoId: 'XAiPdhENsNo' },
  { id: 14, title: 'DKZ 정컨찌르기 EP.06', category: 'Entertainment', videoId: '9R66lSzwwdU' },
  { id: 15, title: 'DKZ 정컨찌르기 EP.07', category: 'Entertainment', videoId: 'sTRllguAeNo' },
  { id: 16, title: 'DKZ 정컨찌르기 EP.08', category: 'Entertainment', videoId: 'dSZ0FmedvF4' },
  { id: 17, title: 'DKZ 정컨찌르기 EP.09', category: 'Entertainment', videoId: 'LKHu5V-Lxz8' },
  { id: 18, title: 'DKZ 정컨찌르기 EP.10', category: 'Entertainment', videoId: 'hu9x_qWRAMI' },
  { id: 19, title: '페이트/그랜드 오더 공식 방송 Vol.8', category: 'Entertainment', videoId: '2v4nKgBizOs' },
  { id: 20, title: '페이트/그랜드 오더 공식 방송 Vol.9', category: 'Entertainment', videoId: 'iJ1g_QIWLXY' },
  { id: 21, title: '페이트/그랜드 오더 공식 방송 Vol.10', category: 'Entertainment', videoId: 'y6O0wLXw9XE' },
  { id: 22, title: '페이트/그랜드 오더 공식 방송 Vol.11', category: 'Entertainment', videoId: 'zXvdjkoPr7w' },
  { id: 23, title: '페이트/그랜드 오더 공식 방송 Vol.12', category: 'Entertainment', videoId: 'n0yzwmr7b30' },
  { id: 24, title: '페이트/그랜드 오더 공식 방송 Vol.13', category: 'Entertainment', videoId: 'UzYMMI6wjI8' },
  { id: 25, title: '시대를 걷는 미술관 1화 - 추상미술의 개념과 역사', category: 'Campaigns', videoId: 'fQ9bMh1G3go' },
  { id: 26, title: '시대를 걷는 미술관 2화 - 추상미술의 개척자', category: 'Campaigns', videoId: 'VlkMhTBbFKM' },
  { id: 27, title: '시대를 걷는 미술관 3화 - 여성 추상미술가들', category: 'Campaigns', videoId: 'peqh0JaH0FM' },
  { id: 28, title: '시대를 걷는 미술관 4화 - 앵포르멜과 추상표현주의', category: 'Campaigns', videoId: 'sZe6No_2zpQ' },
  { id: 29, title: '시대를 걷는 미술관 5화 - 단색화', category: 'Campaigns', videoId: 'Q5x06thsfOA' },
  { id: 30, title: '시대를 걷는 미술관 6화 - 단색화의 변주', category: 'Campaigns', videoId: 'a2bu2TVDIds' },
  { id: 31, title: '시대를 걷는 미술관 7화 - 박서보와 이우환', category: 'Campaigns', videoId: 'ou_8br6uNlM' },
  { id: 32, title: '시대를 걷는 미술관 8화 - 미술관 반상회', category: 'Campaigns', videoId: 'DW6X-esBi-M' },
  { id: 33, title: '[SKT IFLAND] 남산서울타워 신규맵 소개영상', category: 'Brand Film', videoId: 'ERM8f3NrC_I' },
  { id: 34, title: '[SKT IFLAND] 신규아이템 출시 공식 트레일러', category: 'Brand Film', videoId: 'xSDKs4GJijA' },
  { id: 35, title: '[SKT IFLAND] 윤덕원, 후추스의 인디벌스', category: 'Brand Film', videoId: 'xMae9CBL6mE' },
  { id: 36, title: '이마트24는 재주도 좋지- 제주도를 담았으니까', category: 'Brand Film', videoId: 'BH4Pe47-C-c' },
  { id: 37, title: '이마트24에 더클리프행 선셋에일 착륙했습니다', category: 'Brand Film', videoId: 'bt3q_dHslqQ' },
  { id: 38, title: '인마이편의점백 콜라보맛집 이마트24', category: 'Brand Film', videoId: 'mAFci3V1EMk' },
  { id: 39, title: '이마트24 HOT ITEM 원더밥 200% 활용백서', category: 'Brand Film', videoId: '-GyGv6p8SMA' },
  { id: 40, title: "Coway @CES 2022 Here's what we have this year", category: 'Brand Film', videoId: 'wJK91weFzDQ' },
  { id: 41, title: '안전한 바다를 만드는 보안 기술 [메사쿠어컴퍼니]', category: 'Brand Film', videoId: 'vd8XsU0EBQM' },
  { id: 42, title: '화물차주-운송사-화주사 매칭 플랫폼 [코코넛사일로]', category: 'Brand Film', videoId: '8nzFxmatrRU' },
  { id: 43, title: '세계 최초! 바닷속 식물로 만든 신소재 [다인바이오]', category: 'Brand Film', videoId: 'OR-NBoQqXXg' },
  { id: 44, title: '세계 최초! 알아서 선명해지는 유리 [마이크로시스템]', category: 'Brand Film', videoId: 'KrMCnN7bzG0' },
  { id: 45, title: '[SKT MEC] 서울로보틱스편', category: 'Brand Film', videoId: 'CQZ0tzvr6do' },
  { id: 46, title: '[HNS] 게토레이 풋살컵 스케치', category: 'Brand Film', videoId: 'Ke4mArN8jHA' },
  { id: 47, title: '아이스 아메리카노를 주문하면 000가 나오는 수상한 다방 │한독TV', category: 'Brand Film', videoId: 'HRakEZ42lxE' },
  { id: 48, title: '풋징어 게임 한 판 해보시겠습니까? │한독TV', category: 'Brand Film', videoId: 'lVQqmgE27pM' },
  { id: 49, title: '마곡 한독퓨처콤플렉스의 모든 것을 최초 공개! │한독TV', category: 'Brand Film', videoId: '7GBFu0IkRBI' },
  { id: 50, title: '[한화생명] GIG장인 상담소', category: 'Brand Film', videoId: 'peBQUDBOI14' },
  { id: 51, title: '제11기 해리포터 기자단 발대식 현장', category: 'Brand Film', videoId: 'PJiSXZSm80I' },
  { id: 52, title: '운영자가 직접 읽어주는 1월 패치노트 | 배틀그라운드 모바일', category: 'Entertainment', videoId: 'I2fv2nswqfU' },
  { id: 53, title: "[NAMU'S CLIP] '2023 남우현 팬미팅' 비하인드 1화", category: 'Entertainment', videoId: 'z2yh41-35EY' },
  { id: 54, title: '[위아이] 김동한&강석화 퍼피 챌린지, 왕간다 챌린지', category: 'Entertainment', videoId: 'gs8hYY7ekrU' },
  { id: 55, title: '커맨더맨(CMDM) MV & JACKET MAKING 2DAY', category: 'Entertainment', videoId: 'odPahJ0GNxc' },
  { id: 56, title: '커맨더맨(CMDM) MV & JACKET MAKING 1DAY', category: 'Entertainment', videoId: 'yu_cDYAAzVs' },
  { id: 57, title: '커맨더맨(CMDM) 농구 시투하러 갔어요', category: 'Entertainment', videoId: 'aq5AplGKTqs' },
  { id: 58, title: '커맨더맨(CMDM) 1st SINGLE [Back To The Future] 앨범 포장 작업기', category: 'Entertainment', videoId: 'DYiOqhIY_Iw' },
  { id: 59, title: '[비하인더맨] EP.6 커맨더맨(CMDM) THAILAND Mission Game', category: 'Entertainment', videoId: 'rRtICdKWCS0' },
  { id: 60, title: '[돈 때문에 하는 거라서] EP.01', category: 'Entertainment', videoId: 'KO8NIWUQwGU' },
  { id: 61, title: '[돈 때문에 하는 거라서] EP.02', category: 'Entertainment', videoId: 'WneAIpcgzpk' },
  { id: 62, title: '[돈 때문에 하는거라서] EP.03', category: 'Entertainment', videoId: 'M4evT6hX2vA' },
  { id: 63, title: '[돈 때문에 하는 거라서] EP.04', category: 'Entertainment', videoId: '54ioDMZBoTE' },
  { id: 64, title: '[돈 때문에 하는 거라서] EP.05', category: 'Entertainment', videoId: 'vB6Os9hHtIA' },
  { id: 65, title: '[돈 때문에 하는 거라서] EP.06', category: 'Entertainment', videoId: 'LyyNtWM-ObE' },
  { id: 66, title: '[돈 때문에 하는 거라서] EP.07 최종화', category: 'Entertainment', videoId: '_bVTdTmuo-M' },
];

const filters = ['All', 'Brand Film', 'Entertainment', 'Campaigns', 'AI Video'];
const PAGE_SIZE = 6;

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const pagedProjects = filteredProjects.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section id="work" className="portfolio section-padding">
      <div className="container">
        <h2 className="heading-section">Works Reel</h2>
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {pagedProjects.map(project => (
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
        {totalPages > 1 && (
          <div className="portfolio-pagination">
            <button
              className="page-btn"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
