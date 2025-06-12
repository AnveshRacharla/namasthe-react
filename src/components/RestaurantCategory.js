import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,closeitems,setShowIndex})=>{
    const handleClick=()=>{
        // setShowitems(!showItems);
        showItems?closeitems():setShowIndex();
    }
    // const [showItems,setShowitems]=useState(false);
    
    return(
        <div>
            <div className="w-7/12 p-4 mx-auto my-3 bg-gray-100 shadow-lg rounded-lg">
                <div className="flex justify-between cursor-pointer " onClick={handleClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span className="">{showItems ? "⬆️" : "⬇️"}</span>
                </div>
                <div className={`transition-all duration-600 ease-in-out overflow-hidden ${showItems ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        {showItems&&<ItemList items={data.itemCards}/>}
                </div>
            </div>
        </div>
    )
}
export default RestaurantCategory;