import React,{useState} from 'react'
import weatherapi from '../../api/weatherApi'
import Weatherdetailbox from './Weatherdetailbox'
import WeatherDetails from './WeatherDetails';

const Weather = ()=> {
    const [city, setcity] = useState();
    const [weather, setweather] = useState([]);

    const input = (e)=>{
        let name = e.target.name;
        if(name === "city"){
            setcity(e.target.value);
        }
    }

    const weatherData = async (e)=>{
        e.preventDefault();
        if(city === ' '){
            alert('fill city name first');
        }
        else{
                var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherapi}`
                const data = await fetch(url)
                            .then((response) => response.json())
                            .then( data=> data);

                setweather({
                    data:data
                });
        }
    }

    return (
        <>
            <form>
                <input 
                type="text"
                onChange={input}
                name="city" 
                />
                <button onClick={weatherData} >Submit</button>
            </form>
            {
                
                weather.data !== undefined ?
                <>

                <WeatherDetails  
                 cityname={weather.data.name} 
                 countryname={weather.data.sys.country} 
                 outside={weather.data.weather[0].main}
                 temp1={weather.data.main.temp} 
                 min={weather.data.main.temp_max} 
                 max={weather.data.main.temp_min} 
 
                />

                <Weatherdetailbox 
                 pressure={weather.data.main.pressure} 
                 humidity ={weather.data.main.humidity} 
                 visibility={weather.data.visibility} 
                 speed={weather.data.wind.speed}

                />
                
                </>
                :null
            }
            
        </>
    )
}

export default Weather
