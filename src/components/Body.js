import ResDetails from "./ResDetails.js"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import useRestaurantList from "../utils/useRestaurantList"
import useInternetStatus from "../utils/useInternetStatus.js"
import Shimmer from "./Shimmer.js"
import { withPromotedLabel } from "./ResDetails.js"
import UserContext from "../utils/userContext.js"

const ResDetailsPromoted= withPromotedLabel(ResDetails)
const Body = () => {
    const Internetstatus=useInternetStatus();
    const listOfRestaurents = useRestaurantList();
    const {loggedInUser,setUserName}=useContext(UserContext)
    const [filterRes, setFilterRes] = useState([]);
    const [SearchText,setSearchText] =useState("")

    useEffect(() => {
        if (listOfRestaurents !== null) {
            setFilterRes(listOfRestaurents);
        }
    }, [listOfRestaurents]);

    if(listOfRestaurents === null){
        return <Shimmer/>
    }

    if(Internetstatus ===false)return(
        <h1 className="text-center text-2xl font-bold text-red-600 mt-10">
            Please check your internet...!!!!!
        </h1>
    )
    return (
        <div className="m-0 p-6 bg-gray-50 min-h-screen">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex gap-2">
                <input type="text" className="px-4 py-2 border border-gray-300 rounded-lg w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" placeholder="Search restaurants..."
                value={SearchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold" onClick={()=>{
                 const filterList = listOfRestaurents.filter(
                    (res)=>res.name.toLowerCase().includes(SearchText.toLocaleLowerCase())
                 )
                    setFilterRes(filterList)
                }}>
                    🔍 Search
                </button>
            </div>
                <button className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold"
                    onClick={() =>{
                       const filteredList=listOfRestaurents.filter(
                            (res)=> res.avgRating >4.4
                        )
                         setFilterRes(filteredList)
                    }
                    }>
                        ⭐ Top Rated Restaurants
                </button>
                <div><label>UserCOntext: </label>
                    <input  value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)} /></div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {filterRes.map(r => (
                    <Link to={"/restaurents/" + r.id} key={r.id} className="block rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden bg-white border border-gray-100">
                        {r.avgRating >= 4.5 ? <ResDetailsPromoted abc={r} /> : <ResDetails abc={r} />}
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Body;
