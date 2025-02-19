const Button = ({title, type}) => {
  return (
    <button type={type} className="text-white bg-emerald-500 rounded-md p-2">{title}</button>
  )
}

export default Button