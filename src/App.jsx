import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';

import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx"
import Home from './components/Home.jsx';
import './App.css'
import NewsLetter from './components/NewsLetter.jsx';
import DetailsItem from './components/DetailsItem.jsx';
import NotFound from './components/NotFound.jsx';

function App() {
  const [items, setItems]= useState(null);

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home items={items} setItems={setItems}/>} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='news-letter' element={<NewsLetter />} />
          <Route path="detail/:id" element={<DetailsItem items={items} />} />
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </div>
  )
}

export default App
