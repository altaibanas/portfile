import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { translations } from '../utils/translations';

const AppContext = createContext();

const initialState = {
  language: 'ar',
  darkMode: false,
  isMobileMenuOpen: false,
  currentSection: 'home'
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
    case 'SET_CURRENT_SECTION':
      return { ...state, currentSection: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (savedLanguage) {
      dispatch({ type: 'SET_LANGUAGE', payload: savedLanguage });
    }
    if (savedDarkMode) {
      dispatch({ type: 'TOGGLE_DARK_MODE' });
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('language', state.language);
    localStorage.setItem('darkMode', state.darkMode.toString());
    
    // Update document attributes
    document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = state.language;
    
    if (state.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [state.language, state.darkMode]);

  const t = (key) => {
    return translations[state.language][key] || key;
  };

  const setLanguage = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  };

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  const toggleMobileMenu = () => {
    dispatch({ type: 'TOGGLE_MOBILE_MENU' });
  };

  const setCurrentSection = (section) => {
    dispatch({ type: 'SET_CURRENT_SECTION', payload: section });
  };

  const value = {
    ...state,
    t,
    setLanguage,
    toggleDarkMode,
    toggleMobileMenu,
    setCurrentSection
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}