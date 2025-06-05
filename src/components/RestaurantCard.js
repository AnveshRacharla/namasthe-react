const RestaurauntCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId, sla } = props.restaurant;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
                alt={name}
            />
            <h3 className="restaurantInfo">{name}</h3>
            <p className="restaurantInfo"><b>Cuisine:</b> {cuisines?.join(", ")}</p>
            <p className="restaurantInfo"><b>Rating:</b> {avgRating} stars</p>
            <p className="restaurantInfo"><b>Delivery Time:</b> {sla?.deliveryTime} minutes</p>
        </div>
    );
};

export default RestaurauntCard;
