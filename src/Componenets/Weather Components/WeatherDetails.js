import React from 'react'

function WeatherDetails(props) {
    return (
        <>
           <h1>{props.cityname}</h1> 
           <p>{props.countryname}</p>
           <h3>{props.outside}</h3>
            <h1>{props.temp1}</h1>
            <p>K</p>
            <div>
                <p>{props.min}K</p>
                <p>{props.max}K</p>
            </div>
        </>
    )
}

export default WeatherDetails
