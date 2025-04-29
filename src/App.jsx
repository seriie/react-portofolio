import './App.css';
import MainPage from './components/MainPage';
import Admin from './components/admin/Admin';
import NotFound from './components/not_found/NotFound';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;