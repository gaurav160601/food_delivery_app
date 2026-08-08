import { useSelector, useDispatch } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"
import { Link } from "react-router-dom"

const Carts = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity ?? 1), 0)

    const totalPrice = cartItems.reduce((sum, item) => {
        const price = (item?.card?.info?.price ?? item?.card?.info?.defaultPrice ?? 0) / 100
        return sum + price * (item.quantity ?? 1)
    }, 0)

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-32">
                <span className="text-6xl mb-6">🛒</span>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h1>
                <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/" className="px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition-colors">
                    Browse Restaurants
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Cart</h1>
                <button onClick={() => dispatch(clearCart())} className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 active:scale-95 transition-all duration-200">
                    Empty Cart
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
                <ItemList items={cartItems} showAddButton={false} />
            </div>

            <div className="mt-6 flex justify-between items-center bg-orange-50 border border-orange-200 rounded-xl px-6 py-4">
                <span className="text-lg font-semibold text-gray-800">
                    Total ({totalQuantity} {totalQuantity === 1 ? "item" : "items"})
                </span>
                <span className="text-xl font-bold text-orange-600">₹{totalPrice.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default Carts
