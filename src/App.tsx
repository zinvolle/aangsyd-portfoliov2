
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
