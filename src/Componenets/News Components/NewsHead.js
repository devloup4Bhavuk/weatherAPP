import React from 'react'

const NewsHead = (props) => {
    var target = "_blank";
    return (
        <div className="news_title">
            <p>{props.title}<a href={props.url} target={target}> Read More...</a></p>
        </div>
    )
}

export default NewsHead