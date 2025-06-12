import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch=useDispatch();
  const handleAdditem=(item)=>{
    dispatch(addItem(item));
  }
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.card.info.id} className="text-left p-2 m-2 pb-5 border-gray-400 border-b-2">
            <div className="flex justify-between items-start">
              <div className="py-2 pr-2 w-4/5">
                <span className="font-semibold">{item.card.info.name}</span>
                <p>₹{(item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100)}</p>
                <p className="text-xs text-gray-600">{item.card.info.description}</p>
              </div>

              
                <div>
                    <div className="absolute ">
                        <button className="active:scale-95 cursor-pointer px-2 pl-2.5 ml-6 mt-20 rounded-lg bg-neutral-950 text-white " onClick={()=>handleAdditem(item)}>Add+</button>
                    </div>
                    <img
                    className="w-25 h-25 object-cover rounded-md"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
                    alt={item.card.info.name}
                    />
                </div>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
