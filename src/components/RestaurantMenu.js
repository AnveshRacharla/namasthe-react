import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerItemList from "./ShimmerItemList";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const[showIndex,setShowIndex]=useState(null);
    
    const resInfo=useRestaurantMenu(resId);

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);


    if (resInfo == null) return <ShimmerItemList />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );    

    return (
        <div className="text-center">
            <h1 className="font-bold my-3 text-2xl">{name}</h1>
            <p className="font-bold">{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category,index)=> 
            <RestaurantCategory key={category?.card.card.categoryId} setShowIndex={()=>setShowIndex(index)} data={category?.card.card} closeitems={()=>setShowIndex(null)} showItems={index==showIndex?true:false}/>)}
        </div>
    );
};

export default RestaurantMenu;
