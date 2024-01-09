import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Resume from './pages/Resume';
import './App.css';

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </HashRouter>
    </>
  )
};

export default App;