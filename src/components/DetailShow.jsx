import Button from "./shared/Button"

const DetailShow=({ strDrinkThumb, strDrink, strCategory, strAlcoholic, strGlass, strIngredient1, strIngredient2, strIngredient3, strInstructions}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 pt-10">
      <div>
        <Button title="Back Home" />
        <h1 className="text-2xl font-bold pt-5">{strDrink}</h1>
      </div>
      <div className="flex gap-5">
        <img src={strDrinkThumb} alt="image item" className="w-90" />
        <div className="flex flex-col justify-between p-10 text-md font-bold">
          <p><span className="text-emerald-800 bg-emerald-300 rounded-md p-1">Name:</span> {strDrink}</p>
          <p><span className="text-emerald-800 bg-emerald-300 rounded-md p-1">Category:</span> {strCategory}</p>
          <p><span className="text-emerald-800 bg-emerald-300 rounded-md p-1">Info:</span> {strAlcoholic}</p>
          <p><span className="text-emerald-800 bg-emerald-300 rounded-md p-1">Glass:</span> {strGlass}</p>
          <p><span className="text-emerald-800 bg-emerald-300 rounded-md p-1">Ingredients:</span> {strIngredient1}, {strIngredient2}, {strIngredient3}</p>
          <p><span className="text-emerald-800 bg-emerald-300 rounded-md p-1">Instructions:</span> {strInstructions}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailShow