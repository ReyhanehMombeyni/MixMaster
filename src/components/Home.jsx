import axios from 'axios'
import { useEffect, useState } from 'react'
import Search from './Search';
import Items from './Items';

function Home() {

    const [items, setItems]= useState([])

    useEffect(()=>{
    }, [])

  return items ? (
    <div className='px-10 bg-blue-50 min-h-screen'>
        <Search items={items} setItems={setItems} />
        <Items items={items} />
    </div>
  ) : <></>
}

export default Home