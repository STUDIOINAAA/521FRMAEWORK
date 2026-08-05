import React, { useState } from 'react';
import './ContactSection.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyeggqev';

const ContactSection = () => {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="heading-section">프로젝트 의뢰</h2>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="새 프로젝트 문의가 도착했습니다" />
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

            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? '전송 중...' : '문의 접수하기'}
            </button>

            {status === 'success' && (
              <p className="form-status form-status-success">문의가 정상적으로 접수되었습니다. 빠르게 연락드리겠습니다.</p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
