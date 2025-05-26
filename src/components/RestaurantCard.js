import { CDN_URL, LOGO_URL } from "../utils/constants";

const RestaurauntCard=(props)=>{
    console.log(props)
    return (
        <div className="res-card">
            <img className="res-logo" src={LOGO_URL}/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
export default RestaurauntCard;