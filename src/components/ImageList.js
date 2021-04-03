import './ImageList.css'
import ImageCard from "./ImageCard";

/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function ImageList(props) {
    let images = []
    images = props.images.map((img) => {
        return <ImageCard key={img.id}   src={img.urls.regular} alt={img.description}/>
    })
    return (
        <div className='img-list'>
            {images}
        </div>
    )
}

export default ImageList
