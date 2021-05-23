import React from 'react'
import NewsHead from './NewsHead' 

function NewsBox(props) {
    return (
        <>
            <div className="newsbox">
              <div className="newshead1">
                <h1>Top Stories...</h1>
                <span>📰</span>
              </div>
              <hr></hr>
              <div className="newsDiv">
                {props.news.map((newsItem)=>{
                    return <NewsHead title={newsItem.title} url={newsItem.url} />
                })}
              </div>
            </div>
        </>
    )
}
export default NewsBox
