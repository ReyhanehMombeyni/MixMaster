import { useState } from "react";
import { useParams } from "react-router-dom"
import Item from "./Item";
import DetailShow from "./DetailShow";

const DetailsItem=({items}) => {
  const {id}= useParams();
  const [itemData, setItemData]=useState({})
  console.log(itemData)
  return items ? (
    <div>DetailsItem
      {
        items.map(item =>
          item.idDrink===id && <DetailShow key={item.idDrink} {...item} />
        )
        
      }
      {/* {
        itemData ? <h1>{itemData.idDrink}</h1> : <h1>niiii</h1>
      } */}
    </div>
  ) : <h1>Loading....</h1>
}

export default DetailsItem