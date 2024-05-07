import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestroMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) {
        return <Shimmer />;
    }

    const {name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
    console.log("Restro Cards: ", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.categories);
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.categories;
    return (
        <div className="restroMenu">
             <h1>
               {name}
            </h1>
            <h2>
                {cuisines.join(", ")}
            </h2>
            <h2>
                Menu
            </h2>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item?.card?.info?.id}> { item?.card?.info?.name } </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default RestroMenu;