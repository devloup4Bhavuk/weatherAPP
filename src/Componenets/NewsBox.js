import React from 'react'
import NewsHead from './NewsHead' 
function NewsBox(props) {
    return (
        <>
            <div>
              <h1>Top stories</h1>
              <hr></hr>
              {props.news.map((newsItem)=>{
                  return <NewsHead title={newsItem.title} />
              })}
            </div>
        </>
    )
}

export default NewsBox
