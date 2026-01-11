// src/components/theme-switch.js
import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import styled from "styled-components";
import { useDarkMode } from "../hooks/useDarkMode";

const ThemeSwitch = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [mounted, setMounted] = useState(false);

  // Ждем, пока компонент смонтируется на клиенте
  useEffect(() => {
    setMounted(true);
  }, []);

  // Если еще не смонтирован (SSR), не рендерим ничего или рендерим плейсхолдер
  // Это предотвращает мигание "неправильной" иконки
  if (!mounted) {
    return <StyledThemeSwitch style={{ width: 24, height: 24 }} />; 
  }
  
  // isDarkMode true, если тема 'dark'
  const isDarkMode = theme === 'dark';

  return (
    <StyledThemeSwitch>
      <DarkModeSwitch
        style={{ marginBottom: '2rem' }} // Стили
        checked={isDarkMode}
        onChange={toggleTheme}
        size={24}
        moonColor="#FFFFFF"
        sunColor="#000000"
      />
    </StyledThemeSwitch>
  );
};

export default ThemeSwitch;

const StyledThemeSwitch = styled.div`
  display: flex;
  align-items: center;
`;
