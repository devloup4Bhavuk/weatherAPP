import React,{useState,useEffect} from 'react'
import Weather from './Componenets/Weather'
import newsApi from './api/newsApi'
import NewsBox from './Componenets/NewsBox'
const App = () => {
    const[news,setNews] = useState([])
    
    const newsData = async (e)=>{
       
        var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${newsApi}`;
        const data = await fetch(url)
            .then((response) => response.json())
            .then( data=> data);

         setNews({
             data:data
         });
        
    }

    useEffect( ()=> { 
        newsData();
    },[]);






    
	return (
	<>
        <Weather />
        
        {
            news.data !== undefined ?
            console.log(news.data.articles)
            :null
        }
        {
            news.data !== undefined ?
            <NewsBox news={news.data.articles} />
            :null 
        }
	</>
	);
}

export default App;
