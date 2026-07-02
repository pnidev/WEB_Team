import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, select, input, textarea, [role="button"], .interactive-hover'
      );
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial attach
    addHoverListeners();

    // Re-attach occasionally to capture dynamically rendered items
    const interval = setInterval(addHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(interval);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <img
      src={linkHovered 
        ? `${import.meta.env.BASE_URL}images/cursor_interact_object.png` 
        : `${import.meta.env.BASE_URL}images/cursor_normal.png`
      }
      alt="Cursor"
      className="fixed top-0 left-0 pointer-events-none z-[10000] will-change-transform hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        width: '32px',
        height: '32px',
        objectFit: 'contain'
      }}
    />
  );
};
