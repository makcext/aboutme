"use client";
import { createContext } from 'react';

// interface BreakpointStatus {
//   isSmScreen: boolean;
//   isMdScreen: boolean;
//   isLgScreen: boolean;
// }

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  // breakpointStatus: BreakpointStatus;
  currentMediaQuery: string;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  toggleDarkMode: () => {},
  // breakpointStatus: {
  //   isSmScreen: false,
  //   isMdScreen: false,
  //   isLgScreen: false,
  // },
  currentMediaQuery: '',
});

export default ThemeContext;