import React, { useEffect, useState } from 'react';
import './DotNav.css';

const sections = ['home', 'aboutMe', 'project'];

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
      {sections.map((id) => (
        <div
          key={id}
          className={`dot ${activeSection === id ? 'active' : ''}`}
          onClick={() => handleClick(id)}
        />
      ))}
    </div>
  );
}

export default DotNav;
