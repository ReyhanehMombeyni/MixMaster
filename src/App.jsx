import { Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx"
import Home from './components/Home.jsx';
import './App.css'
import NewsLetter from './components/NewsLetter.jsx';
import DetailsItem from './components/DetailsItem.jsx';
import { useState } from 'react';

function App() {
  const [items, setItems]= useState([]);

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home items={items} setItems={setItems}/>} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='news-letter' element={<NewsLetter />} />
          <Route path="detail/:id" element={<DetailsItem items={items} />} />
        </Routes>
      </div>
  )
}

export default App
