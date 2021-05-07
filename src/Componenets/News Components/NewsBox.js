import React from 'react'
import NewsHead from './NewsHead' 

function NewsBox(props) {
    return (
        <>
            <div className="newsbox">
              <h1 class="newshead1">Top stories</h1>
              <hr></hr>
              {props.news.map((newsItem)=>{
                  return <NewsHead title={newsItem.title} />
              })}
            </div>
        </>
    )
}
export default NewsBox
