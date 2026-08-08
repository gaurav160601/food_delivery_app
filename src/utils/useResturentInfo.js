import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_MENU_URL } from './constants'

const useResturentInfo = () => {
    const { restaurantId } = useParams();
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchRestaurantDetails();
    }, []);

    const fetchRestaurantDetails = async () => {
        const res = await fetch(`${RESTAURANT_MENU_URL}/${restaurantId}`);
        const json = await res.json();
        setResInfo(json.data);
    };

    return resInfo;
}

export default useResturentInfo
