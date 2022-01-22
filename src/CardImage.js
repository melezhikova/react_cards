function CardImage (props) {
    const { image } = props;

    return (
        <img src={image.url} className="card-img-top" alt={image.description}></img>
    )
}

export default CardImage;