import ClipLoader from "react-spinners/ClipLoader";

import Item from "./Item"

const Items=({items}) => {

  // const override: CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };
  
  return items ? (
    <div className="flex gap-10 px-10 flex-wrap justify-center items-center w-full">
        {
            items.map(item => <Item key={item.idDrink} {...item} />)
        }
    </div>
  ) : (
    <h1> Loading .... </h1>
  )
}

export default Items