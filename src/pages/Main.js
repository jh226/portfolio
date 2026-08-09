import React, { useState, useEffect, useCallback, useRef } from 'react';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Certificates from './sections/Certificates';

const sectionIds = ['home', 'aboutMe', 'certificates'];
const COOLDOWN = 1000;

function Main() {
  const [currentSection, setCurrentSection] = useState(0);
  const currentRef = useRef(0);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);

  const goToSection = useCallback((index) => {
    if (index < 0 || index >= sectionIds.length || index === currentRef.current) return;
    currentRef.current = index;
    setCurrentSection(index);
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionIds[index] }));
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionIds[0] }));
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN) return;
      lastScrollTime.current = now;
      const cur = currentRef.current;
      if (e.deltaY > 0) goToSection(cur + 1);
      else if (e.deltaY < 0) goToSection(cur - 1);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      lastScrollTime.current = now;
      const cur = currentRef.current;
      if (diff > 0) goToSection(cur + 1);
      else goToSection(cur - 1);
    };

    const handleNavRequest = (e) => {
      const idx = sectionIds.indexOf(e.detail);
      if (idx !== -1) goToSection(idx);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('navRequest', handleNavRequest);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('navRequest', handleNavRequest);
    };
  }, [goToSection]);

  return (
    <div
      className="fullpage-slides"
      style={{ transform: `translateY(-${currentSection * 100}vh)` }}
    >
      <Home />
      <AboutMe />
      <Certificates />
    </div>
  );
}

export default Main;
