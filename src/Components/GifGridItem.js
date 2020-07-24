import React from 'react'

export default function GifGridItem({title,url}) {

    
    // console.log(props);

    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
