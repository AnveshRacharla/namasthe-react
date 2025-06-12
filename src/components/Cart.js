import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div>
                
                {cartItems.length!=0&&(
                    <button className="active:scale-95 p-2 m-2 cursor-pointer hover:scale-105 bg-neutral-950 text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                )}
                {cartItems.length==0&&(
                    <div className="m-2 p-2">
                        <h1 className="text-[20px] font-semibold">Do More Shopping</h1>
                    </div>
                )}
                <div className="w-7/12 bg-neutral-100 rounded-lg border-y-2 m-auto">
                    <ItemList items={cartItems}/>
                </div>
            </div>
        </div>
    )
}

export default Cart;