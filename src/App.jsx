import { Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx"
import Home from './components/Home.jsx';
import './App.css'
import NewsLetter from './components/NewsLetter.jsx';

function App() {

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='news-letter' element={<NewsLetter />} />
        </Routes>
      </div>
  )
}

export default App
