import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LawyerPage from "./pages/LawyerPage";
import Disclaimer from "./pages/Disclaimer";
import BreakingNews from "./pages/BreakingNews";

import MusicButton from "./components/MusicButton";
import Stars from "./components/Stars";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import NxtFloor from "./pages/NxtFloor";
import LetterPage from "./pages/LetterPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route path="/" element={<Landing />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/lawyer" element={<LawyerPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/breaking-news" element={<BreakingNews />} />

        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/nxt-floor" element={<NxtFloor />} />

        <Route path="/letter/:id" element={<LetterPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Stars />

      <MusicButton />

      <AnimatedRoutes />

    </BrowserRouter>
  );
}

export default App;