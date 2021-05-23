import React from 'react'
import '../../Css/index.css'

function WeatherDetails(props) {
        return (
            props.cod === '200'?
            <>
               <h1 className="head1">{props.cityname}</h1> 
               <h2 className="head2">
               {`${props.countryname}.   ${new Date().toDateString()}`}
               </h2>
               <h3 className="head3">{props.outside}</h3>
                <h1 className="head4"><span> {Math.floor(props.temp1 - 273.15)}</span>
                <sup className="k">o</sup>C
                </h1>
                <div className="div1">
                    <p>Min <span>{Math.floor(props.min - 273.15)}</span><sup>o</sup>C</p>
                    <p>Max <span>{Math.floor(props.max - 273.15)}</span><sup>o</sup>C</p>
                    
                </div>
            </>
            :
            <>
                <h1 className="head1">No City Entered</h1> 
                <h2 className="head2">
               {`${new Date().toDateString()}`}
               </h2>
               <h3 className="head3">No Weather Data Found</h3>
                <h1 className="head4"><span>--</span>
                </h1>
            </>
        )
}

export default WeatherDetails
