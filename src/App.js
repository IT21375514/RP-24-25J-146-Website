import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { ToolsandTechnologies } from "./components/ToolsandTechnologies";
import { AboutMe } from "./components/AboutMe";
import { Domain }  from "./components/Domain";
import { Milestone } from "./components/Milestone";
import { CoreComponents } from "./components/CoreComponents";
import { Documents } from "./components/Documents";
import { Gallery } from "./components/Gallery";
import { Conference } from "./components/Conference";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Domain />
      <Milestone />
      <CoreComponents />
      <Documents />
      <Gallery />
      <ToolsandTechnologies />
      <Conference />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
