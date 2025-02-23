import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/portfolio' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
};

export default App;