import React from 'react';
import PropTypes from 'prop-types';

export default function GifGridItem({title,url}) {

    
    // console.log(props);

    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}