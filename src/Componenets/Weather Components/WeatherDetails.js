import React from 'react'
import '../../Css/index.css'

function WeatherDetails(props) {
    return (
        <>
           <h1 className="head1">{props.cityname}</h1> 
           <h2 className="head2">{props.countryname}</h2>
           <h3 className="head3">{props.outside}</h3>
            <h1 className="head4"><span>{props.temp1}</span><span className="k">k</span></h1>
            <div className="div1">
                <div>
                <p>Min <span>{props.min}</span>K &nbsp; &nbsp; &nbsp;</p>
                </div>
                <div>
                <p>Max <span>{props.max}</span>k</p>
                <p></p>
                </div>
            </div>
        </>
    )
}

export default WeatherDetails
