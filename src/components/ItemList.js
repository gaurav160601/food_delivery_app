import { addItem, removeItem } from "../utils/cartSlice";
import { CND_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const ItemList=({items, showAddButton = true})=>{
const dispatch =useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item))

  }

  const handleRemoveItem = (item)=>{
    dispatch(removeItem(item.card.info.id))
  }

return (
    <div>
      {items.map((item, index) => (
        <div key={index}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price/100}
              </span>
              {item.quantity > 1 && (
                <span className="ml-2 text-xs text-gray-500">({item.quantity} items)</span>
              )}
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            {item.card.info.ratings?.aggregatedRating?.ratingValue && (
              <div className="mt-2 text-xs">
                <span className="text-green-600 font-bold">
                  ★ {item.card.info.ratings.aggregatedRating.ratingValue}
                </span>
                <span className="text-gray-500">
                  {" "}({item.card.info.ratings.aggregatedRating.ratingCount})
                </span>
              </div>
            )}
            {showAddButton ? (
              <button onClick={()=>handleAddItem(item)} className="mt-3 px-6 py-1.5 rounded-full border-2 border-green-600 text-green-700 font-bold text-sm shadow-sm hover:bg-green-600 hover:text-white transition-colors">
                ADD +
              </button>
            ) : (
              <div className="mt-3 inline-flex items-center border-2 border-green-600 rounded-full overflow-hidden">
                <button onClick={()=>handleRemoveItem(item)} className="px-3 py-1.5 text-green-700 font-bold hover:bg-green-600 hover:text-white transition-colors">
                  −
                </button>
                <span className="px-3 font-bold text-green-700">{item.quantity}</span>
                <button onClick={()=>handleAddItem(item)} className="px-3 py-1.5 text-green-700 font-bold hover:bg-green-600 hover:text-white transition-colors">
                  +
                </button>
              </div>
            )}
          </div>
          <div className="w-3/12 p-4">
            {item.card.info.imageId ? (
              <img src={CND_URL + item.card.info.imageId} className="w-full" />
            ) : (
              <div className="w-full aspect-square bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                No image
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList