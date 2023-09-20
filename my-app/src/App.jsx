import React from 'react';
import { useTheme } from './ThemeContext';
import { Counter } from './Counter';

export function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>Theme Toggle</h1>
      </header>
      <main>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p>Current theme: {isDarkMode ? 'Dark' : 'Light'}</p>
        <Counter/>
      </main>
    </div>
  );
}
 export default App

