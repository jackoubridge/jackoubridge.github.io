import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
//import Resume from './pages/Resume';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Navigate to='/portfolio' />} />
          <Route path='/portfolio' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
};

export default App;