function CardLink (props) {
    const { link } = props;
    return (
        <a href={link.url} className={`btn btn-${link.type}`}>{link.text}</a>
    )
}

export default CardLink;