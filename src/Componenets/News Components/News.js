import React ,{useState,useEffect}from 'react'
import newsApi from '../../api/newsApi'
import NewsBox from './NewsBox'
import '../../Css/index.css'
const  News = () => {

    const[news,setNews] = useState([])

    const newsData = async (e)=>{
        var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${newsApi}`;
        const data = await fetch(url)
            .then((promise) => promise.json())
            .then( (response) => response);

         setNews( {
             data:data
         });
        
    }

    useEffect( ()=> { 
        newsData();
    },[]);

    
	return (
	<div className="news" class="col-md-6 news">
        {
            news.data !== undefined ?
            <NewsBox news={news.data.articles}/>
            :null 
        }
	</div>
	);
}
export default News;
