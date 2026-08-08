import { CND_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
import { useContext } from "react";
const ResDetails = ({ abc }) => {
    const { name, avgRating, areaName, locality, cloudinaryImageId } = abc;
    const rating = avgRating;
    const city = areaName || locality || "Bangalore";
    const pictureId = cloudinaryImageId;
     const { loggedInUser } = useContext(UserContext);
    return (
      <div className="w-[250px] overflow-hidden">
        <img className="w-full h-[160px] object-cover"
          src={`${CND_URL}${pictureId}`}
          alt={name}
        />
        <div className="p-3">
          <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
          <p className="text-sm text-orange-600 font-semibold">⭐ {rating}</p>
          <p className="text-sm text-gray-500">{city}</p>
          <h4>User : {loggedInUser} </h4>
        </div>
      </div>
    )
}

export const withPromotedLabel = (WrappedComponent) => {
    return (props) => {
        const isPromoted = props.abc.avgRating >= 4.5;
        return (
            <div className="relative">
                {isPromoted && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded z-10">
                        Promoted
                    </span>
                )}
                <WrappedComponent {...props} />
            </div>
        )
    }
}


export default ResDetails;