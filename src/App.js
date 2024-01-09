import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Resume from './pages/Resume';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;