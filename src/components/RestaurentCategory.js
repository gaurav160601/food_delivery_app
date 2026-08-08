import { useState } from "react";
import ItemList from "./ItemList";
const RestaurentCategory = ({ data,showlist ,setShowIndex}) => {

    const handleClick=()=>{
        setShowIndex()
    }

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
        <div
          className="flex justify-between"
          onClick={handleClick}>
          <span className="font-bold text-lg" 
           >
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showlist &&<ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory
