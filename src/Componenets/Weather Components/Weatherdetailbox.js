import React from "react";

function Weatherdetailbox(props){
    return (
        <div>
        <table className="tab">
            <tr >
                <td ><img src="https://img.icons8.com/android/24/000000/pressure.png" alt=""/>
                    Pressure
                    </td>
                <td className="humid">
                <img className="humidimage" src="https://img.icons8.com/android/24/000000/humidity.png" alt=""/>
                 Humidity
                 </td>
            </tr>
            <tr >
                <td >{props.pressure}</td>
                <td className="humid1">{props.humidity}</td>
            </tr>
            <tr>
            <td >
            <img src="https://img.icons8.com/emoji/48/000000/eye-emoji.png" alt=""/>
                  Visibility
            </td>
                <td className="humid">
                <img src="https://img.icons8.com/ios/50/000000/wind-speed-less-1.png" alt=""/>
                    Wind Speed
                     </td>
            </tr>
            <tr >
                <td >{props.visibility}</td>
                <td className="humid1">{props.speed}</td>
            </tr>
            
        </table>
        </div>
    )
}
export default Weatherdetailbox;