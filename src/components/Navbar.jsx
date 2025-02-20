import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar=() => {
    const [StyleHome, setStyleHome]= useState("text-emerald-500");
    const [StyleAbout, setStyleAbout]= useState("");
    const [StyleNews, setStyleNews]= useState("");
        
    const clickHanndler= (str) => {
        if(str==="Home") {
            setStyleHome("text-emerald-500")
            setStyleAbout("")
            setStyleNews("")
        } else if(str==="About") {
            setStyleAbout("text-emerald-500")
            setStyleHome("")
            setStyleNews("")
        } else if(str==="News") {
            setStyleNews("text-emerald-500")
            setStyleHome("")
            setStyleAbout("")
        }   
    }

  return (
    <div className="flex justify-between items-center px-20">
        <h1 className="text-5xl text-emerald-500 font-bold py-5">MixMaster</h1>
        <ul className="flex gap-5">
            <li onClick={() => clickHanndler('Home')} className={`${StyleHome}`}>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li onClick={() => clickHanndler('About')} className={`${StyleAbout}`}>
                <Link to="/about-us">
                    About
                </Link>
            </li>
            <li onClick={() => clickHanndler('News')} className={`${StyleNews}`}>
                <Link to="/news-letter">
                    NewsLetter
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar