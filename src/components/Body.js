import { useContext, useEffect, useState } from "react";
import RestaurauntCard from "./RestaurantCard";
import Shimmer from "./ShimmerBody";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANTS_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [topRated, setTopRated] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANTS_API);
      const json = await data.json();
      console.log(json);

      const restaurants = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurants || []);
      setOriginalList(restaurants || []);
    } catch (error) {
      console.error("Failed to fetch Swiggy data:", error);
    }
  };

  const applyFilters = ({ searchName = "", isTopRated = false }) => {
    let filtered = originalList;

    if (searchName.trim() !== " ") {
      filtered = filtered.filter(
        (res) =>
          res.info.name
            .toLowerCase()
            .includes(searchName.trim().toLowerCase()) ||
          res.info.cuisines
            .join(", ")
            .toLowerCase()
            .includes(searchName.trim().toLowerCase())
      );
    }

    if (isTopRated) {
      filtered = filtered.filter(
        (res) => parseFloat(res.info.avgRating) >= 4.0
      );
    }

    setListOfRestaurants(filtered);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    applyFilters({ searchName: text, isTopRated: topRated });
  };

  const toggleTopRated = () => {
    const newTopRated = !topRated;
    setTopRated(newTopRated);
    applyFilters({ searchName: searchText, isTopRated: newTopRated });
  };

  // if (!onlineStatus) return <h1>Looks like you are offline</h1>;

  return listOfRestaurants.length === 0 && searchText == "" ? (
    <Shimmer />
  ) : (
    <div className="scroll-smooth">
      <div className="justify-center flex m-2 my-4 mt-6">
        <div className="m-1">
          <input
            type="text"
            className="px-3 pr-50 py-1 border-1 rounded-sm border-b-black"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search restaurants/food"
          />
        </div>
        <button
          className="px-3 active:scale-97 m-1 ml-3 rounded-sm cursor-pointer bg-neutral-300 hover:scale-[1.03] transition-transform duration-200 ease-in-out"
          onClick={toggleTopRated}
        >
          {topRated ? "Show All Ratings" : "Top Rated Restaurants"}
        </button>

        {/* Optional user input field */}
        {/* 
                <div className="m-1">
                    UserName:
                    <input
                        type="text"
                        className="ml-1 px-3 py-1 border-1 rounded-sm border-b-black"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="User Name"
                    />
                </div>
                */}
      </div>

      {listOfRestaurants.length === 0 ? (
        <h2 className="text-center m-5 text-gray-500">
          No restaurants match your filters.
        </h2>
      ) : (
        <div className="flex flex-wrap justify-center gap-1">
          {listOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurauntCard restaurant={restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
