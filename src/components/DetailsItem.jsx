import { useState } from "react";
import { useParams } from "react-router-dom"
import DetailShow from "./DetailShow";

const DetailsItem=({items}) => {
  const {id}= useParams();
  return items ? (
    <div className="bg-blue-50 px-20">
      {
        items.map(item =>
          item.idDrink===id && <DetailShow key={item.idDrink} {...item} />
        )
        
      }
    </div>
  ) : <h1>Loading....</h1>
}

export default DetailsItem