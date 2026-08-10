import React, { useEffect, useRef, useCallback } from 'react';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Certificates from './sections/Certificates';

const sectionIds = ['home', 'aboutMe', 'certificates'];

function Main() {
  const containerRef = useRef(null);
  const activeSectionRef = useRef('home');

  const emitSectionChange = useCallback((id) => {
    if (id === activeSectionRef.current) return;
    activeSectionRef.current = id;
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: id }));
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionIds[0] }));
  }, []);

  useEffect(() => {
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) emitSectionChange(id);
        },
        { threshold: 0.6 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [emitSectionChange]);

  useEffect(() => {
    const handleNavRequest = (e) => {
      const el = document.getElementById(e.detail);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('navRequest', handleNavRequest);
    return () => window.removeEventListener('navRequest', handleNavRequest);
  }, []);

  return (
    <div className="fullpage-slides" ref={containerRef}>
      <Home />
      <AboutMe />
      <Certificates />
    </div>
  );
}

export default Main;
