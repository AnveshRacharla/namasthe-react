import RestaurauntCard from "./RestaurantCard";

const Body=()=>{
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{console.log("Button-clicked")}}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                <RestaurauntCard resName="KFC" cuisine="food"/>
                <RestaurauntCard resName="KFC" cuisine="food"/>
                <RestaurauntCard resName="KFC" cuisine="food"/>
                <RestaurauntCard resName="KFC" cuisine="food"/>
                <RestaurauntCard resName="KFC" cuisine="food"/>
                <RestaurauntCard resName="KFC" cuisine="food"/>
            </div>
        </div>
    )
}

export default Body;