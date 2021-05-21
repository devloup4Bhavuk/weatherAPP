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
              {props.news.map((newsItem)=>{
                  return <NewsHead title={newsItem.title} />
              })}
            </div>
        </>
    )
}
export default NewsBox
