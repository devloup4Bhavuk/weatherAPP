import React from "react";

function Weatherdetailbox(props){
    return (
        <div>
        <table className="tab">
            <tr >
                <td ><img src="https://img.icons8.com/android/24/000000/pressure.png"/>
                    Pressure
                    </td>
                <td className="humid">
                <img src="https://img.icons8.com/android/24/000000/humidity.png"/>
                 Humidity
                 </td>
            </tr>
            <tr >
                <td >{props.pressure}</td>
                <td className="humid1">{props.humidity}</td>
            </tr>
            <tr>
            <td >
            <img src="https://img.icons8.com/emoji/48/000000/eye-emoji.png"/>
                  Visibility
            </td>
                <td className="humid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    &nbsp; Wind Speed
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