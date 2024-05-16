import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Game from "./Pages/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
