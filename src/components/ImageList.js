import './ImageList.css'

/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function ImageList(props) {
    let images = []
    images = props.images.map((img,index) => {
        return <img key={index.toString()} className='search-img' src={img.urls.small} alt={''}/>
    })
    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList
