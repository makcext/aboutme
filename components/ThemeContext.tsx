"use client";
import { createContext } from 'react';


interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentMediaQuery: string;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  toggleDarkMode: () => {},

  currentMediaQuery: '',
});

export default ThemeContext;