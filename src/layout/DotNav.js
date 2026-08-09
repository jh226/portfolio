import React, { useEffect, useState } from 'react';
import './DotNav.css';

const sections = [
  { id: 'home', label: '소개' },
  { id: 'certificates', label: '자격증' },
  { id: 'aboutMe', label: '타임라인' },
];

function DotNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleSectionChange = (e) => {
      setActiveSection(e.detail);
    };
    window.addEventListener('sectionChange', handleSectionChange);
    return () => window.removeEventListener('sectionChange', handleSectionChange);
  }, []);

  const handleClick = (id) => {
    window.dispatchEvent(new CustomEvent('navRequest', { detail: id }));
  };

  return (
    <div className="dot-nav">
      {sections.map(({ id, label }) => (
        <div
          key={id}
          className={`dot-item ${activeSection === id ? 'active' : ''}`}
          onClick={() => handleClick(id)}
        >
          <span className="dot-label">{label}</span>
          <div className="dot" />
        </div>
      ))}
    </div>
  );
}

export default DotNav;
