import { useEffect, useState } from 'react'
import Search from './Search';
import Items from './Items';
import NotFoundItem from './NotFoundItem';
import Spinner from './Spinner';
import ErrorPage from './ErrorPage';

function Home({items, setItems}) {
  
  const [isLoading, setIsLoading]= useState(false);
  const [isError, setIsError]= useState(false);

    useEffect(()=>{
    }, [])

  return (
    <div className='px-10 bg-blue-50 min-h-screen'>
        <Search items={items} setItems={setItems} setIsLoading={setIsLoading} setIsError={setIsError} />
        {
          isError && <ErrorPage />
        }
        {
          !items ? (
            isLoading ? (<Spinner />) : (<NotFoundItem />)
          ) : (<Items items={items} />)
        }
    </div>
  ) 
}

export default Home