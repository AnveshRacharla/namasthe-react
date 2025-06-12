const RestaurauntCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, sla } =
    props.restaurant;

  return (
    <div
      data-testid="resCard"
      className=" m-2 p-1.5 w-58 h-100 border-1 bg-neutral-200 rounded-2xl transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:shadow-md cursor-pointer box-border opacity-100 active:scale-98"
    >
      <img
        className="w-70 h-50 rounded-2xl"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt={name}
      />
      <h3 className="font-bold py-0.5 pt-1 text-center text-[18px]">{name}</h3>
      <p className="pl-0.5 py-0.5">
        <b>Cuisine:</b> {cuisines?.join(", ")}
      </p>
      <p className="pl-0.5 py-0.5">
        <b>Rating:</b> {avgRating} stars
      </p>
      <p className="pl-0.5 py-0.5">
        <b>Delivery Time:</b> {sla?.deliveryTime} minutes
      </p>
    </div>
  );
};

export default RestaurauntCard;
