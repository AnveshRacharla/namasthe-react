import { useEffect, useState } from "react";
import RestaurauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANTS_API } from "../utils/constants";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [topRated, setTopRated] = useState(false);

    const onlineStatus=useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(RESTAURANTS_API);
            const json = await data.json();

            const restaurants = json?.data?.cards?.find(
                (card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setListOfRestaurants(restaurants || []);
            setOriginalList(restaurants || []);
        } catch (error) {
            console.error("Failed to fetch Swiggy data:", error);
        }
    };

    const applyFilters = (searchValue, isTopRated) => {
        let filtered = originalList;

        if (searchValue.trim() !== " ") {
            filtered = filtered.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.trim().toLowerCase())
            );
        }

        if (isTopRated) {
            filtered = filtered.filter(
                (res) => parseFloat(res.info.avgRating) >= 4.5
            );
        }

        setListOfRestaurants(filtered);
    };

    const handleSearch = (text) => {
        setSearchText(text);
        applyFilters(text, topRated);
    };

    const toggleTopRated = () => {
        const newTopRated = !topRated;
        setTopRated(newTopRated);
        applyFilters(searchText, newTopRated);
    };

    // if(onlineStatus==false) return <h1>Looks like you are offline</h1>;

    return (listOfRestaurants.length === 0&&searchText==="") ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="justify-center flex m-2 my-4 mt-6">
                <div className="m-1">
                    <input
                        type="text"
                        className=" px-3 pr-50 py-1 border-1 rounded-sm border-b-black"
                        value={searchText}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search restaurants"
                    />
                </div>
                <button className="px-3 m-1 ml-3 rounded-sm cursor-pointer bg-neutral-300 hover:scale-[1.05] transition-transform duration-200 ease-in-out" onClick={toggleTopRated}>
                    {topRated ? "Show All Ratings" : "Top Rated Restaurants"}
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
                {listOfRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    <RestaurauntCard
                        restaurant={restaurant.info}
                    />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
