import './App.css';
import MainPage from './components/MainPage';
import Admin from './components/admin/Admin';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;