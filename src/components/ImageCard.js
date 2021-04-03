import React from 'react';
import PropTypes from 'prop-types'

function ImageCard({alt, key, src}) {
    return (
        <div>
            <img src={src} key={key} alt={alt}/>
        </div>
    );
}

ImageCard.propTypes = {
    alt:PropTypes.string,
    src: PropTypes.string,
    key:PropTypes.string
};
ImageCard.defaultProps={
    alt:'',
    src:'',
    key:""
}

export default ImageCard;
