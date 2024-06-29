
function Card (props) {
    console.log(props.items)
    return (
        <div className="card">
            <img className="card--img" src={"../src/assets/"+props.items.coverImg} alt="cover_img"/>
            <div className="card--stats">
                <img className="stats--img" src="../src/assets/Star.png" alt="star_img" />
                <p className="stats--rating">{props.items.stats.rating}</p>
                <p className="stats--reviewCount">({props.items.stats.reviewCount}) ⋅ </p>
                <p className="stats--location"> {props.items.location}</p>
            </div>
            <h2 className="normal">{props.items.title}</h2>
            <p className="normal"><span className="bold">From ${props.items.price}</span> / person</p>
        </div>
    )
}

export default Card