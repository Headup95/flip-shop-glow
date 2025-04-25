
import React, { useState, useEffect } from 'react';

interface FlipSignProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const FlipSign: React.FC<FlipSignProps> = ({ texts, interval = 4000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsFlipping(false);
      }, interval / 2);
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return (
    <div className={`perspective-1000 ${className}`}>
      <div className={`transform-style-preserve-3d transition-all duration-700 ${isFlipping ? 'rotate-x-90' : ''}`}>
        <span className="block font-bold animate-flip">{texts[currentIndex]}</span>
      </div>
    </div>
  );
};

export default FlipSign;
