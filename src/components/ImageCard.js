import React from 'react';
import PropTypes from 'prop-types'

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.mImageRef = React.createRef();
        this.state = {spans: 0}
    }

    componentDidMount() {
        this.mImageRef.current.addEventListener('load', this.onLoadImage)
    }

    onLoadImage = () => {
        const height = this.mImageRef.current.clientHeight;
        const spans=Math.ceil(height/10+1);
        this.setState({spans})
    }

    render() {
        const {alt, key, src} = this.props;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img className={'img-list search-img'} src={src} key={key} alt={alt} ref={this.mImageRef}/>
            </div>
        );
    }
}

ImageCard.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    key: PropTypes.string
};
ImageCard.defaultProps = {
    alt: '',
    src: '',
    key: ""
}

export default ImageCard;
