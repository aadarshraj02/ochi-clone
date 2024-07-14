import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Projects from "./components/Projects";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
      <Projects></Projects>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
