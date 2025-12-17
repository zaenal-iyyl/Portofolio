import React, { useEffect, useState } from 'react';
import Pages from './Pages';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') setDarkMode(true);
  }, []);

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Zaenal's Portofolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-4 py-1 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      <Pages />
    </div>
  );
};

export default App;
