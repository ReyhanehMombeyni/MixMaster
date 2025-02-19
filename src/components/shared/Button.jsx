import { Link } from "react-router-dom"

const Button = ({id, title, type}) => {
  return title==="Details" ? (
    <Link className="text-white bg-emerald-500 rounded-md p-2" to={`/detail/${id}`}>
        Details
    </Link>
  ) : (
    <button type={type} className="text-white bg-emerald-500 rounded-md p-2">{title}</button>
  )
}

export default Button