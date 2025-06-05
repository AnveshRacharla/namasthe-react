import { useEffect, useState } from "react";
import RestaurauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
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

    if(onlineStatus==false) return <h1>Looks like you are offline</h1>;

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search restaurants"
                    />
                </div>
                <button className="filter-btn" onClick={toggleTopRated}>
                    {topRated ? "Show All Ratings" : "Top Rated Restaurants"}
                </button>
            </div>
            <div className="res-container">
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
