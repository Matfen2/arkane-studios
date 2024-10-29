import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Studio from "./components/Studio/Studio";
import Game from "./components/Game/Game";

function App() {
  return (
    <Router>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/game/:id" element={<Game />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
