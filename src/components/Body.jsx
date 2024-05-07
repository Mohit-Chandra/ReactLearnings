import RestroCard, { withPromotedLabel } from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import  useOnlineStatus  from "../utils/useOnlineStatus";

const Body = () => {
    const [resList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false){
        return (
            <h1> Look's like You are offline </h1>
        );
    }
    const RestroCardPromoted = withPromotedLabel(RestroCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(resList.length===0){
        return <Shimmer />
    }

    console.log("Res List: ", resList);

    return (
        <div className="bodyContainer">
            <div className="filterBtn">
                <div className="search m-4 p-4">
                <button className = "px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={
                    ()=>{
                        console.log("Button Clicked");
                        const filteredList = resList.filter(
                            res => res.data.avgRating > 4
                        );
                        setFilteredResList(filteredList);
            }}> Top Rated Restro </button>
                </div>
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black " value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={ () => {
                        console.log(searchText);
                        const filteredList = resList.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredResList(filteredList);
                        console.log(filteredList);
                    }}>Search</button>
                </div>
            </div>
            <div className="flex">
                {
                    filteredResList.map((restaurant) => (
                       <Link key={restaurant?.info.id}  
                        to={"/restro/"+restaurant?.info.id}>
                            <RestroCard resData={restaurant}/>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
};

export default Body;