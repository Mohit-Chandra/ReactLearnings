import { IMG_CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const {resData} = props;
    return (
        <div className = "m-4 p-4 bg-gray-50 w-[250px] hover:bg-gray-300">
             <img className ="rounded-lg" alt = "res-logo" src={IMG_CDN_URL + resData.info.cloudinaryImageId}/>
            <h4 className="font-bold py-4 text-lg"> {resData.info.name} </h4>
           <h4> Cusinies - {resData.info.cuisines}</h4>
           <h4> Rating - {resData.info.avgRating}</h4>
           <h4> {resData.info.lastMileTravel} </h4>
        </div>
    );
};

export const withPromotedLabel = (RestroCard) => {
    return (props) => {
        return (
            <div>
                <label> Promoted </label>
                <RestroCard { ...props }/>
            </div>
        )
    }
}
export default RestroCard;