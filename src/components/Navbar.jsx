import { Link } from "react-router-dom"

const Navbar=() => {
  return (
    <div className="flex justify-between items-center px-20">
        <h1 className="text-5xl text-emerald-500 font-bold py-5">MixMaster</h1>
        <ul className="flex gap-5">
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about-us">
                    About
                </Link>
            </li>
            <li>
                <Link to="/news-letter">
                    NewsLetter
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar