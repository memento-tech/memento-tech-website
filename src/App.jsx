import { HashRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import FullContainer from "./components/FullContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <FullContainer>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </FullContainer>
  );
}

export default App;
