import React,{useState,useEffect} from 'react'
import weatherapi from './api/weatherApi'
import News from './Componenets/News';
import NewsCard from './Componenets/NewsCard.js';
import "./index.css";

import WeatherDetails from './Componenets/WeatherDetails'
const App = () => {
    const [city, setcity] = useState();
    const [weather, setweather] = useState([]);
    const[news,setNews] = useState([])
    const[count,setCount] = useState(1)
    
    
    const newsData = async (e)=>{
       
        var url = 'https://api.publicapis.org/entries';
        //  var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${newsApi}`;
        const data = await fetch(url)
            .then((response) => response.json())
            .then( data=> data);

         setNews({
             data:data
         });
        
    }

    useEffect( ()=> {
        
        newsData();

       
      },[count]);






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
        {
            news.data !== undefined ?
            console.log(news.data.count)
            :null
        }
        <News/>
        <NewsCard/>
        <WeatherDetails/>
	</>
	);
}

export default App;
