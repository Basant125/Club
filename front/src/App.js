//  CSS
import "./App.css";

//  File

import NavBar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero";
import Top from "./components/Top/Top";
import About from "./components/About/About ";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Top />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
