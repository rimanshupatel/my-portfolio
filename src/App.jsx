import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Services from "./components/Services"
import ContactUs from "./components/ContactUs"
import "typeface-montserrat";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ fontFamily: "montserrat" }}>
        <Navbar />
        <div className="container mx-auto px-24 capitalize">
        <Home />
        <AboutMe/>
        <Skill/>
        <Services/>
        <ContactUs/>
        </div>
      </div>

    </>
  );
}

export default App;
