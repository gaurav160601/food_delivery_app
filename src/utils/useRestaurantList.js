import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constants";

const useRestaurantList = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState(null);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const res = await fetch(RESTAURANT_LIST_URL);
        const json = await res.json();
        const seen = new Set();
        const list = json.data.cards
            .flatMap((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
            .map((entry) => entry.info)
            .filter((info) => {
                if (seen.has(info.id)) return false;
                seen.add(info.id);
                return true;
            });
        setListOfRestaurents(list);
    };

    return listOfRestaurents;
};

export default useRestaurantList;
