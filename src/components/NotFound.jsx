import { Link } from 'react-router-dom'
import imgNotFound from '../assets/not-found.svg'
const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 min-h-screen bg-blue-50 px-20'>
        <img src={imgNotFound} alt="image not found" className='w-80' />
        <h1 className='text-4xl font-bold'>Ohh!</h1>
        <p className='text-gray-500'>We can't seem to find page you are looking for.</p>
        <Link to="/" className='text-emerald-500'>
            Back Home
        </Link>
    </div>
  )
}

export default NotFound