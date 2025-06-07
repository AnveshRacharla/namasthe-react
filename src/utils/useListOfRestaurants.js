const useListOfRestaurants=()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
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
            // setOriginalList(restaurants || []);
        } catch (error) {
            console.error("Failed to fetch Swiggy data:", error);
        }
    };

    return listOfRestaurants;
}

export default useListOfRestaurants;