import React from "react";

function Weatherdetailbox(props){
    return (
        <div>
        <table> 
            <tr >
                <td ><p>Pressure</p></td>
                <td><p>Pressure</p></td>
            </tr>
            <tr >
                <td >{props.pressure}</td>
                <td >100</td>
            </tr>
            <tr style={{padding:"5px"}} >
                <td ><p>Pressure</p></td>
                <td ><p>Pressure</p></td>
            </tr>
            <tr >
                <td >100</td>
                <td >100</td>
            </tr>
            
        </table>
        </div>
    )
}
export default Weatherdetailbox;