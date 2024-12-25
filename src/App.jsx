import React from 'react'
import Post from "./Components/post";
import ThemeToggle from './Components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import "./styles/theme.css"
const App = () => {
  return (
    <ThemeProvider>
      <section className="">
        <ThemeToggle />
        <Post />
      </section>
    </ThemeProvider>
  );
}

export default App
