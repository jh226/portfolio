import React, { useState, useEffect, useCallback, useRef } from 'react';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Certificates from './sections/Certificates';

const sectionIds = ['home', 'aboutMe', 'certificates'];

function Main() {
  const [currentSection, setCurrentSection] = useState(0);
  const currentRef = useRef(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  const goToSection = useCallback((index) => {
    if (index < 0 || index >= sectionIds.length || isAnimating.current) return;
    isAnimating.current = true;
    currentRef.current = index;
    setCurrentSection(index);
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionIds[index] }));
    setTimeout(() => { isAnimating.current = false; }, 700);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionIds[0] }));
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isAnimating.current) return;
      const cur = currentRef.current;
      if (e.deltaY > 0) goToSection(cur + 1);
      else if (e.deltaY < 0) goToSection(cur - 1);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
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
