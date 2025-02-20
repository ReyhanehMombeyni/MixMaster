import { useState } from "react"
import Button from "./shared/Button"
import axios from "axios"

const Search = ({setItems}) => {

    const [item, setItem]= useState("")

    const formHandler = async (e) => {
        e.preventDefault();
        try {
            const res= await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${item}`);
            const {data}= res;
            setItems(data.drinks);        
        } catch (error) {
            return 
            
        }
    }
    return (
        <div className="py-10">
            <form onSubmit={formHandler} className="flex gap-1 justify-center items-center bg-white p-5 w-fit m-auto">
                <input type="text" onChange={(e) => {setItem(e.target.value)}} value={item} className="rounded-md border border-solid outline-none border-gray-100 bg-blue-50 w-100 h-10 pl-5" placeholder="...." />
                <Button title="Search" type="submit" />
            </form>
        </div>
    )
}

export default Search