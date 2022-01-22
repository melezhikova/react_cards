import CardTitle from "./CardTitle";
import CardLink from "./CardLink";
import CardImage from "./CardImage";

function Card (props) {
    console.log(props);
    const { card } = props;
    return (
        <div className="card">
            <CardImage image={card.image} />
            <div className="card-body">
                <CardTitle title={card.title} />
                <p className="card-text">{card.text}</p>
                <CardLink link={card.link} />
            </div>
        </div>
    )
}

export default Card;