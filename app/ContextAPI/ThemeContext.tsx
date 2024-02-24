// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { GetTheme } from '../theme/themes';
import { getTheme, setTheme } from '../storage/mmkv';
import { theme } from '../theme/theme';

interface ThemeContextProps {
  isDarkMode: typeof theme ; 
  toggleSwitch: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{children:React.ReactNode}> = ({ children}) => {
  const [isDarkMode, setIsDarkMode] = useState(theme);


    const toggleSwitch = () => {
        const newTheme = isDarkMode.name === 'Dark' ? 'Light' : 'Dark';
        setIsDarkMode(GetTheme(newTheme));
        setTheme(newTheme);
        
    };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
