import React,{useState} from 'react'
import weatherapi from './api/weatherApi'
const App = () => {
    const [city, setcity] = useState();
    const [weather, setweather] = useState([]);
    const input = (e)=>{
        let name =e.target.name;
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
            <p>{weather.data.main.temp}</p>
            :null
        }
	</>
	);
}

export default App;
