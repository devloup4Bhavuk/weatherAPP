import React from "react";

function Weatherdetailbox(props){
    return (
        <div className="weatherDetailBox">
        <div className="detailBoxRow">
            <div className="boxDetails">
                <p>Pressure</p>
                <p>{props.pressure}</p>
            </div>
            <div className="boxDetails">
                <p>Humidity</p>
                <p>{props.humidity}</p>
            </div>
        </div>
        <div className="detailBoxRow">
        <div className="boxDetails">
                <p>Visibility</p>
                <p>{props.visibility}</p>
            </div>
            <div className="boxDetails">
                <p>Wind Speed</p>
                <p>{props.speed}</p>
            </div>
        </div>
        </div>
    )
}
export default Weatherdetailbox;