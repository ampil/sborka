// src/hooks/useDarkMode.js

import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  // Проверяем, есть ли window (для SSR безопасности)
  const isBrowser = typeof window !== 'undefined';
  
  // Изначальное состояние: пробуем прочитать из localStorage или системных настроек
  const [theme, setTheme] = useState(() => {
    if (isBrowser) {
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Fallback для SSR
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (isBrowser) {
      window.localStorage.setItem('theme', newTheme);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      const body = document.body;
      body.classList.remove('light-mode', 'dark-mode');
      body.classList.add(`${theme}-mode`);
    }
  }, [theme, isBrowser]);

  return [theme, toggleTheme];
};
