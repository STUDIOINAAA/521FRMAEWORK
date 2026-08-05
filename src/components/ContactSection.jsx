import React from 'react';
import './ContactSection.css';

const CONTACT_EMAIL = '521framework@gmail.com';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const company = form.company.value;
    const name = form.name.value;
    const position = form.position.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const project = form.project.value;

    const subject = `[문의] ${company} - ${project}`;
    const body = [
      `고객사명: ${company}`,
      `담당자: ${name}`,
      `직책: ${position}`,
      `이메일: ${email}`,
      `연락처: ${phone}`,
      `프로젝트 이름: ${project}`,
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="heading-section">프로젝트 의뢰</h2>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="company">고객사명</label>
                <input type="text" id="company" name="company" placeholder="회사 또는 단체명" required />
              </div>
              <div className="form-group">
                <label htmlFor="name">담당자</label>
                <input type="text" id="name" name="name" placeholder="담당자 성함" required />
              </div>
            </div>
            
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="position">직책</label>
                <input type="text" id="position" name="position" placeholder="담당자 직책" />
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" placeholder="example@email.com" required />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="phone">연락처</label>
                <input type="tel" id="phone" name="phone" placeholder="010-0000-0000" required />
              </div>
              <div className="form-group">
                <label htmlFor="project">프로젝트 이름</label>
                <input type="text" id="project" name="project" placeholder="프로젝트명 또는 가제" required />
              </div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">문의 접수하기</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
