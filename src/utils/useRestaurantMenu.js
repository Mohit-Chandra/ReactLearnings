
import { FETCH_RESTROMENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);

useEffect(() => {
    fetchMenu();
},[]);

const fetchMenu = async () => {
    const menuData = await fetch(FETCH_RESTROMENU_URL+resId);
    const menuJson = await menuData.json();
    console.log(menuJson);
    setResInfo(menuJson.data);
};
return resInfo;
}
export default useRestaurantMenu;
