'use client';

import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const windowHeight = window.innerHeight;
      const documentHeight = article.clientHeight;
      const scrollTop = window.scrollY;
      const articleTop = article.offsetTop;

      const scrolled = scrollTop - articleTop + windowHeight;
      const percentage = (scrolled / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-600 to-primary-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
