import { HashRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import FullContainer from "./components/FullContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactUsPage from "./pages/ContactUsPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechHubPage from "./pages/TechHubPage";

function App() {
  return (
    <FullContainer>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tech-hub" element={<TechHubPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </FullContainer>
  );
}

export default App;
