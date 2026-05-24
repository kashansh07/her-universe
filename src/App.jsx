import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MusicButton from "./components/MusicButton";
import Stars from "./components/Stars";

import { AnimatePresence } from "framer-motion";


import Landing from "./pages/Landing";
import MyLove from "./pages/MyLove";
import LetterPage from "./pages/LetterPage";


function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence mode = "wait">
            <Routes location={location} key={location.pathname}>

              <Route path="/" element={<Landing />} />
              <Route path="/myLove" element={<MyLove />} />
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