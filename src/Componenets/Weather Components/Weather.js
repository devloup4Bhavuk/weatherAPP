import React,{useState} from 'react'
import weatherapi from '../../api/weatherApi'
import Weatherdetailbox from './Weatherdetailbox'
import WeatherDetails from './WeatherDetails';
import '../../Css/index.css'

const Weather = ()=> {
    const [city, setcity] = useState();
    const [weather, setweather] = useState({
        cod:404
    });

    const input = (e)=>{
        let name = e.target.name;
        if(name === "city"){
            setcity(e.target.value);
        }
    }

    const weatherData = async (e)=>{
        e.preventDefault();
        if(city === ''){
            alert('fill city name first');
        }
        else{
                var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherapi}`
                const data = await fetch(url)
                            .then((response) => response.json())
                            .then( data=> data);
                if(data.cod === 404){
                    alert('Enter Correct City Name')
                    setweather({
                        cod:data.cod
                    })
                }
                else{
                    setweather({
                        data:data,
                        cod:data.cod
                    });
                }
        }
    }

    return (
        <div class="col-md-6 weather">
            <form className="form" onSubmit={weatherData}>
                <input 
                type="text"
                onChange={input}
                name="city" class="form-control" autoComplete="off" placeholder="Type Your City Name "
                className="inp1 col-sm-12"
                />
                {/* <button onClick={weatherData} >Submit</button> */}
            </form>
            <br></br>
            {
                
                    weather.cod === 200 ?
                    <>

                    <WeatherDetails  
                    cityname={weather.data.name} 
                    countryname={weather.data.sys.country} 
                    outside={weather.data.weather[0].main}
                    temp1={weather.data.main.temp} 
                    min={weather.data.main.temp_max} 
                    max={weather.data.main.temp_min} 
                    icon={weather.data.weather[0].icon}
                    cod="200"
                    />

                    <Weatherdetailbox 
                    pressure={weather.data.main.pressure} 
                    humidity ={weather.data.main.humidity} 
                    visibility={weather.data.visibility} 
                    speed={weather.data.wind.speed}

                    />
                    
                    </>
                    :<>

                    <WeatherDetails  
                    cod="404"
                    />

                
                </>
                
            }
            
        </div>
    )
}

export default Weather
