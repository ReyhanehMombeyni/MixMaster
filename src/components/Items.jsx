import Item from "./Item"

const Items=({items}) => {
  return (
    <div className="flex gap-10 px-10 flex-wrap justify-center items-center w-full">
        {
            items.map(item => <Item key={item.idDrink} {...item} />)
        }
    </div>
  )
}

export default Items