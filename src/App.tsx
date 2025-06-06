import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home.tsx';
import Game from './components/Game.tsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App
