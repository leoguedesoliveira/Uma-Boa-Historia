import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import HistoryPage from './pages/historyPage/HistoryPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/Uma-Boa-Historia' element={<Home />} />
        <Route path='/Uma-Boa-Historia/story/:id' element={<HistoryPage />} />
      </Routes>
    </Router>
  )
}

export default App
