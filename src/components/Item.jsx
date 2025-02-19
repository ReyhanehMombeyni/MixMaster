import Button from "./shared/Button"

const Item=({idDrink, strGlass, strDrinkThumb, strAlcoholic}) => {
  return (
    <div className="flex flex-col gap-3 w-90 bg-white pb-5 rounded-xl shadow-2xs">
        <img src={strDrinkThumb} alt="drink image" className="h-70 rounded-t-xl" />
        <h1 className="pl-5 text-2xl font-bold">{idDrink}</h1>
        <p className="pl-5 text-xl">{strGlass}</p>
        <span className="pl-5 text-gray-500">{strAlcoholic}</span>
        <div className="pl-5">
            <Button title="Details" type="button" />
        </div>
    </div>
  )
}

export default Item