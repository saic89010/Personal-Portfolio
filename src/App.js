import React from 'react';
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./style.css";
import "./about.css";
import "./app.css";


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
