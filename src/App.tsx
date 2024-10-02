import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import HistoryPage from './pages/historyPage/HistoryPage';

function App() {

  return (
    <Router basename='/Uma-Boa-Historia'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/story/:id' element={<HistoryPage />} />
      </Routes>
    </Router>
  )
}

export default App
