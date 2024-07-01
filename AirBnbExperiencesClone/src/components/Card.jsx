import PropTypes from 'prop-types'
import star_icon from '../assets/Star.png'

function Card (props) {
    let badgeText
    if (props.items.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.items.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={props.items.coverImg} alt="cover_img"/>
            <div className="card--stats">
                <img className="stats--img" src={star_icon} alt="star_img" />
                <p className="stats--rating">{props.items.stats.rating}</p>
                <p className="stats--reviewCount">({props.items.stats.reviewCount}) ⋅ </p>
                <p className="stats--location"> {props.items.location}</p>
            </div>
            <h2 className="normal">{props.items.title}</h2>
            <p className="normal"><span className="bold">From ${props.items.price}</span> / person</p>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    items: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        coverImg: PropTypes.string,
        stats: PropTypes.shape({
            rating: PropTypes.number,
            reviewCount: PropTypes.number
        }),
        location: PropTypes.string,
        openSpots: PropTypes.number
    })
};

export default Card