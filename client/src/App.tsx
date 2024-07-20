import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import GameList from './components/GameList'
import PixiEmbeded from './components/PixiEmbeded'

function App() {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={<GameList />} />
          <Route path='/game' element={<PixiEmbeded />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
