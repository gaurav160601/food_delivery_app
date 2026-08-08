import Shimmer from "./Shimmer"
import useResturentInfo from "../utils/useResturentInfo";
import RestaurantCategory from "./RestaurentCategory"
import { useState } from "react";
const ResMenu = () => {
    const resInfo = useResturentInfo();
    const [showIndex,setShowIndex]=useState(null)


    if (resInfo === null) return <Shimmer />;

    const info = resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = info;

     const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );



  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory 
        key={index} 
        data={category?.card?.card} 
        showlist={index === showIndex ? true :false} 
        setShowIndex={()=>setShowIndex(index === showIndex ? null : index)}/>
        
      ))}
    </div>
  );
};

export default ResMenu
