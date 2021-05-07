import React from "react";

function Weatherdetailbox(props){
    return (
        <div>
        <table> 
            <tr >
                <td ><p>Pressure</p></td>
                <td>Humidity</td>
            </tr>
            <tr >
                <td >{props.pressure}</td>
                <td >{props.humidity}</td>
            </tr>
            <tr>
                <td >Visibility</td>
                <td >Wind Speed</td>
            </tr>
            <tr >
                <td >{props.visibility}</td>
                <td >{props.speed}</td>
            </tr>
            
        </table>
        </div>
    )
}
export default Weatherdetailbox;