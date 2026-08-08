import { LOGO_URL } from "../utils/constants"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import useInternetStatus from "../utils/useInternetStatus"
import UserContext from "../utils/userContext"
import { useSelector } from "react-redux"
const Header= ()=>{
    const InternetStatus=useInternetStatus();
    const [btnbutton,setBtnbutton]=useState("login")
    const { loggedInUser } = useContext(UserContext);
    const cartItems= useSelector((store) => store.cart.items)
    
    return(
        <div className="m-0 px-6 py-3 flex justify-between items-center bg-white shadow-md">
            <div className="w-28">
               <img src={LOGO_URL} height="100"/>
            </div>
            <div className="flex flex-nowrap">
                <ul className="flex flex-nowrap items-center gap-5 text-gray-700 font-medium">
                    <li className="hover:text-orange-600 hover:scale-105 transition-all duration-300">{InternetStatus?"✅ Online":"🔴 Offline"}</li>
                    <li className="hover:text-orange-600 hover:scale-105 transition-all duration-300"><Link to="/">Home</Link></li>
                    <li className="hover:text-orange-600 hover:scale-105 transition-all duration-300"><Link to="/about">About</Link></li>
                    <li className="hover:text-orange-600 hover:scale-105 transition-all duration-300"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-orange-600 hover:scale-105 transition-all duration-300"><Link to="/cart">🛒 Cart ({cartItems.length}-items)</Link></li>
                    <button className="px-4 py-1.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold" onClick={()=>{
                       btnbutton === "login" ? setBtnbutton("logout"): setBtnbutton("login");
                    }}>
                        {btnbutton}
                    </button>
                     <li className="px-4 ">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
