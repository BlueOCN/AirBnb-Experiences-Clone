import airbnb_logo from '../assets/airbnb 1.png'

function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnb_logo} alt="airbnb_img" className="navbar--logo"/>
        </nav>
    )
}

export default Navbar